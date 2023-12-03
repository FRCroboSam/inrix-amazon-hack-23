import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MyMap({ point1, point2, point3 }) {
  const position = [37.7749, -122.4194]; // San Francisco
  const zoom = 10;

  // Define marker positions
  const markerPositions = [
    [37.7749, -122.4194], // Location 1
    [37.8049, -122.4294], // Location 2
    [37.7849, -122.4094], // Location 3
  ];

  // Define polyline options
  const polylineOptions = { color: "purple" };

  // Marker elements
  const markers = markerPositions.map((position, idx) => (
    <Marker key={idx} position={position}>
      <Popup>Location {idx + 1}</Popup>
    </Marker>
  ));

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
      <Polyline positions={point1} pathOptions={polylineOptions} />
      <Polyline positions={point2} pathOptions={polylineOptions} />
      <Polyline positions={point3} pathOptions={polylineOptions} />

      {/* Your form and other HTML elements go here within the JSX */}
      {/* Example for a simple form */}
      <div style={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
        <form>
          <label>
            <input type="radio" name="option" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="option" value="option2" />
            Option 2
          </label>
          {/* Add more form elements as needed */}
        </form>
      </div>
    </MapContainer>
  );
}
