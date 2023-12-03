"use client";

import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip, Popup, multiPolyline} from "react-leaflet"
import 'leaflet/dist/leaflet.css';


export default function MyMap() {
  const position = [37.7749, -122.4194]
  const zoom = 10
  const multiPolyline1 =  [
    [37.77592627741517, -122.422245353168],
    [37.73318687352494,-122.4528300428503],
    [37.68085375668285, -122.46705547991203],
    [37.62003345210407, -122.47345692658956],
    [37.57382181419773, -122.46776675176497],
    [37.57382181419773, -122.47843582956122],
    [37.51742732633792, -122.48625981994516],
    [37.5225045771526, -122.48625981994516],
  ];
  
  const multiPolyline2 = [
    [37.776488473416194, -122.42082280946184],
    [37.740499311337175, -122.42437916872734],
    [37.667342438213566, -122.42082280946184],
    [7.61270913124483, -122.41299881907787],
    [37.586786511015006, -122.3952170227509],
    [37.56705672838872, -122.40375228498806],
    [37.532093997150085, -122.45567513026259],
    [37.51460648216056, -122.48412600438583],
  ];

  const multiPolyline3 = [
    [37.77536407713889, -122.4229566250212],
    [37.68704562205491, -122.4442947806134],
    [37.63918595698672, -122.45069622729122],
    [37.5963676619442, -122.45425258655644],
    [37.556344085875565, -122.45211877099736],
    [37.52927370747041, -122.47345692658956],
    [37.519119781663846, -122.48483727623903],
  ];

  const puprpleOptions = {color: 'purple'}
  return (<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0 }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    { <Marker position={position}> 
      {<Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> }
    </Marker> }
      <multiPolyline positions={multiPolyline1} color="blue" />
      <multiPolyline positions={multiPolyline2} color="red" />
      <multiPolyline positions={multiPolyline3} color="green" />
  </MapContainer>)
}