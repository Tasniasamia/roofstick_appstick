"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const MapContainerCustom = () => {
  const position: [number, number] = [51.505, -0.09];
  return (
    <div className="h-[420px] mt-[120px] bg-red-300 w-full overflow-hidden">
      <div className="container">
        <MapContainer center={[50.5, 30.5]} zoom={13} scrollWheelZoom={false} style={{width:"100%",height:"100%"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapContainerCustom;
