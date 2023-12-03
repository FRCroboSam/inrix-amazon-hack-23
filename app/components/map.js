"use client";

import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip, Popup, Polyline } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
//import "./leaflet.css"
//import "leaflet-defaulticon-compatibility"
//import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap() {
  const position = [37.7749, -122.4194]
  const zoom = 10
  const polyline = [
    [37.7749, -122.4194],
    [38.0648, -122.4194],
  ]
  const puprpleOptions = {color: 'purple'}
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
    <Polyline pathOptions ={puprpleOptions} positions = {polyline} />
  </MapContainer>)
}