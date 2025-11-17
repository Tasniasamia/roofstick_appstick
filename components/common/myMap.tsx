"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import {
  useMapData,
  filterPlacesByCategory,
  searchPlaces,
  type Category,
  type Place,
} from "@/hooks/useMapData";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const startPoint = {
  x: 8,
  y: 15,
  label: "Starting Point",
  sublabel: "Stark Tower",
};
const endPoint = {
  x: 92,
  y: 28,
  label: "Destination",
  sublabel: "Wayne Manor",
};

export default function MapView() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  function convertToDivPosition(point: { x: number; y: number }) {
    if (!svgRef.current) return { left: 0, top: 0 };

    const rect = svgRef.current.getBoundingClientRect();

    return {
      left: (point.x / 100) * rect.width,
      top: (point.y / 70) * rect.height,
    };
  }

  const startBoxPos = convertToDivPosition(startPoint);
  const endBoxPos = convertToDivPosition(endPoint);

  const { categories, places, loading } = useMapData();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleProgress, setVehicleProgress] = useState(0);
  const [displayedPlaces, setDisplayedPlaces] = useState<Place[]>([]);
  const [routePath, setRoutePath] = useState<{ x: number; y: number }[]>([
    { x: 8, y: 15 },
  ]);
  useEffect(() => {
    async function fetchOSRMRoute() {
      try {
        const startLat = startPoint.y;
        const startLon = startPoint.x;

        const endLat = endPoint.y;
        const endLon = endPoint.x;

        const url = `https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;

        const res = await fetch(url);
        const data = await res.json();
        console.log("data", data);

        if (!data.routes || data.routes.length === 0) return;
        const coords = data.routes[0].geometry.coordinates;
        const converted = coords.map(([lon, lat]: [number, number]) => ({
          x: lon,
          y: lat,
        }));

        setRoutePath([...routePath, ...converted]);
      } catch (error) {
        console.error("OSRM route fetch failed:", error);
      }
    }

    fetchOSRMRoute();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setDisplayedPlaces(searchPlaces(places, categories, searchQuery));
      setSelectedCategory(null);
    } else if (selectedCategory) {
      setDisplayedPlaces(
        filterPlacesByCategory(places, categories, selectedCategory)
      );
    } else {
      setDisplayedPlaces([]);
    }
  }, [searchQuery, selectedCategory, places, categories]);

  const getPointOnPath = (progress: number) => {
    const totalSegments = routePath.length - 1;
    const segmentProgress = (progress / 100) * totalSegments;
    const currentSegment = Math.floor(segmentProgress);
    const segmentFraction = segmentProgress - currentSegment;

    if (currentSegment >= totalSegments) {
      return routePath[routePath.length - 1];
    }

    const start = routePath[currentSegment];
    const end = routePath[currentSegment + 1];

    return {
      x: start.x + (end.x - start.x) * segmentFraction,
      y: start.y + (end.y - start.y) * segmentFraction,
    };
  };

  const vehiclePosition = getPointOnPath(vehicleProgress);

  const createPathString = () => {
    return routePath
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <Card className="w-full max-w-6xl mx-auto">
          <CardContent className="p-8 text-center text-slate-500">
            Loading map data...
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className=" ">
      <Card className="w-full max-w-6xl mx-auto border-0 shadow-none">
        <CardContent className="p-0">
          <div className=" bg-white pb-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.name ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(
                        selectedCategory === category.name
                          ? null
                          : category.name
                      );
                      setSearchQuery("");
                    }}
                    className={`${
                      selectedCategory === category.name
                        ? "  border-[#00ACC1] "
                        : "border-[#E8EAE8] "
                    } py-6 px-4  text-[#05073C] cursor-pointer bg-white text-sm rounded-[30px] border-2`}
                  >
                    {/* <span className="w-4 h-4 mr-1.5">{getCategoryIcon(category.id)}</span> */}
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative rounded-xl  bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <svg
              ref={svgRef}
              viewBox="0 0 100 70"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="0.3"
                  />
                </pattern>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="100" height="70" fill="url(#grid)" />

              <g opacity="0.15">
                <rect
                  x="12"
                  y="8"
                  width="15"
                  height="8"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="35"
                  y="12"
                  width="20"
                  height="12"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="60"
                  y="6"
                  width="18"
                  height="10"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="20"
                  y="25"
                  width="12"
                  height="15"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="45"
                  y="20"
                  width="25"
                  height="8"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="75"
                  y="15"
                  width="15"
                  height="12"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="10"
                  y="45"
                  width="18"
                  height="10"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="35"
                  y="50"
                  width="22"
                  height="14"
                  rx="0.5"
                  fill="#94a3b8"
                />
                <rect
                  x="65"
                  y="48"
                  width="20"
                  height="16"
                  rx="0.5"
                  fill="#94a3b8"
                />
              </g>

              <g opacity="0.2">
                <path
                  d="M 0 30 Q 15 32 30 30"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 25 10 Q 40 8 55 10"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 50 55 Q 70 53 85 58"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M 15 60 C 30 62 45 60 60 65"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  fill="none"
                />
              </g>

              <path
                d={createPathString()}
                stroke="#14b8a6"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />

              <circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="1.2"
                fill="#14b8a6"
                stroke="white"
                strokeWidth="0.3"
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="1.2"
                fill="#14b8a6"
                stroke="white"
                strokeWidth="0.3"
              />

              {displayedPlaces.map((place) => {
                const color = "#00ACC1";
                return (
                  <g key={place.id}>
                    <circle
                      cx={place.latitude}
                      cy={place.longitude}
                      r="1"
                      fill={color}
                      stroke="white"
                      strokeWidth="0.2"
                      opacity="0.8"
                    />
                    <circle
                      cx={place.latitude}
                      cy={place.longitude}
                      r="1.5"
                      fill="none"
                      stroke={color}
                      strokeWidth="0.3"
                      opacity="0.4"
                    />
                  </g>
                );
              })}

              <g
                transform={`translate(${vehiclePosition.x}, ${vehiclePosition.y})`}
              >
                <rect
                  x="-1.5"
                  y="-1"
                  width="3"
                  height="2"
                  rx="0.3"
                  fill="#1e293b"
                  stroke="#14b8a6"
                  strokeWidth="0.2"
                />
                <circle cx="0" cy="0" r="0.3" fill="#14b8a6" />
              </g>
            </svg>

        
            <div
              className="absolute w-fit h-[58px] bg-white/95 backdrop-blur-sm rounded-lg shadow-md  p-4 flex items-center gap-2"
              style={{
                left: startBoxPos.left,
                top: startBoxPos.top,
                transform: "translate(-50%, -120%)", 
                boxShadow:' 0 20px 50px 0 rgba(0, 190, 156, 0.10)'

              }}
            >
              {/* <Icons.MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> */}
              <div className="w-7 h-7 rounded-full grid place-items-center bg-teal-100">
                <GoDotFill className="text-[20px] text-teal-500 " />
              </div>
              <div>
                <p className="text-xs font-medium text-secondary">
                  {startPoint.label}
                </p>
                <p className="text-xs font-semibold text-black">
                  {startPoint.sublabel}
                </p>
              </div>
            </div>

            <div
              className="absolute w-[158px] h-[58px] bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-4 flex items-center gap-2"
              style={{
                left: endBoxPos.left,
                top: endBoxPos.top,
                transform: "translate(-50%, -120%)",
                boxShadow:' 0 20px 50px 0 rgba(0, 190, 156, 0.10)'
              }}
            >
              <div className="w-7 h-7 rounded-full grid place-items-center bg-teal-100">
                <FaLocationDot className="text-[20px] text-teal-500 " />
              </div>
              <div>
                <p className="text-xs font-medium text-secondary">
                  {endPoint.label}
                </p>
                <p className="text-xs font-semibold text-black">
                  {endPoint.sublabel}
                </p>
              </div>
            </div>

            {displayedPlaces.length > 0 && (
              <div className="absolute bottom-4 w-fit left-4 right-4 max-h-40 overflow-y-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
                <div className="p-3">
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    Found {displayedPlaces.length} location
                    {displayedPlaces.length !== 1 ? "s" : ""}
                  </p>
                  <div className="space-y-1.5">
                    {displayedPlaces.map((place) => (
                      <div
                        key={place.id}
                        className="flex items-center gap-20 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#00ACC1" }}
                          />
                          <span className="text-slate-700">{place.name}</span>
                        </div>
                        {place.distance && (
                          <span className="text-slate-500">
                            {place.distance} km
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
