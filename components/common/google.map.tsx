"use client";

import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "20px",
  overflow: "hidden",
};

const center = { lat: 23.8103, lng: 90.4125 };

const startPoint = { lat: 23.8121, lng: 90.4002 };
const endPoint = { lat: 23.8207, lng: 90.4301 };

const path = [
  { lat: 23.8121, lng: 90.4002 },
  { lat: 23.8142, lng: 90.4051 },
  { lat: 23.8185, lng: 90.410 },
  { lat: 23.8207, lng: 90.4301 },
];

const mapStyle = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#d6e8e8" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#d1e5f1" }],
  },
];

export default function LocationPage() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyDQQSZrGsx1GzGXmrvWQTyNaO4ZZRvIpHo",
      });
      

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="w-full p-6 relative">
      
      <div className="flex gap-4 mb-4">
        {["Transport", "Education", "Shopping", "Food", "Parks"].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 border rounded-full hover:bg-gray-100 transition"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            styles: mapStyle,
            disableDefaultUI: true,
          }}
        >
          <Marker
            position={startPoint}
            icon={{
              url: "/car-icon.png",
              scaledSize: new google.maps.Size(50, 50),
            }}
          />

          <Marker position={endPoint} />

          <Polyline
            path={path}
            options={{
              strokeColor: "#00A884",
              strokeWeight: 5,
            }}
          />
        </GoogleMap>

        <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
          <p className="text-xs text-gray-500">Starting Point</p>
          <p className="font-semibold">Stark Tower</p>
        </div>

        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-md">
          <p className="text-xs text-gray-500">Destination</p>
          <p className="font-semibold">Wayne Manor</p>
        </div>
      </div>
    </div>
  );
}
