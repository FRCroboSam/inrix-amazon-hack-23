"use client";

import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip, Popup, Polyline } from "react-leaflet"
import 'leaflet/dist/leaflet.css';


export default function MyMap() {
  const position = [37.7749, -122.4194]
  const zoom = 10
  const polyline1 = [
    [37.7749, -122.4194],
    [38.0648, -122.3194],
  ];
  
  const polyline2 = [
    [37.7749, -122.4194],
    [38.1648, -122.5194],
  ];
  
  const polyline3 = [
    [37.7749, -122.4194],
    [38.2648, -122.4194],
  ];

  const purpleOptions = {color: 'purple'}
  return (<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 250 }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    { <Marker position={position}> 
      {<Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> }
    </Marker> }
  <Polyline positions={polyline1} color="blue" />
      <Polyline positions={polyline2} color="red" />
      <Polyline positions={polyline3} color="green" />
  </MapContainer>)
}