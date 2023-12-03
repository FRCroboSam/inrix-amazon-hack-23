"use client";

import React, { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip, Popup, Polyline } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import RoutingMachine, { setCheap2, setShort2 } from './RoutingMachine';
export function setCheap(){
  setCheap2(); 
}

export function setShort(){
    setShort2();
}

export default function MyMap({ point1, point2, point3, route }) {
  const position = [37.77309957872636, -122.41037895366077]
  const zoom = 10
  const polyline1 = point1; 
  const polyline2 = point2; 
  const polyline3 = point3; 
  const theRoute = route;
  
  console.log(route);
  // const polyline1 = [
  //   [37.7749, -122.4194],
  //   [38.0648, -122.3194],
  // ];
  
  // const polyline2 = [
  //   [37.7749, -122.4194],
  //   [38.1648, -122.5194],
  // ];
  
  // const polyline3 = [
  //   [37.7749, -122.4194],
  //   [38.2648, -122.4194],
  // ];

  const puprpleOptions = {color: 'purple'}
  // return (<MapContainer center={position} zoom={0.1} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 250 }}>
  //   <TileLayer
  //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   { <Marker position={position}> 
  //     {<Popup>
  //       A pretty CSS3 popup. <br /> Easily customizable.
  //     </Popup> }
  //   </Marker> }
  //   <Polyline positions={polyline1} color="blue" />
  //   <Polyline positions={polyline2} color="red" />
  //   <Polyline positions={polyline3} color="green" />
  // </MapContainer>)
    return (
      <MapContainer
        center={position} 
        zoom={16} 
        scrollWheelZoom={false} 
        style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 250 }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
        />
        <RoutingMachine route={theRoute} />
      </MapContainer>
    );
}