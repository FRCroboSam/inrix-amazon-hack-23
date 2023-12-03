import L, { routing } from "leaflet";
import React, { useState, useEffect } from 'react';
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import {wayPointsShortest, wayPointsGas} from '../components/constant.js'

var instance = null; 
var routingMachine = null; 


const createRoutineMachineLayer = (props) => {
  console.log(props.route);
  console.log("-----");

   instance = L.Routing.control({
    waypoints: props.route,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    waypointMode: 'snap',
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false
  });

  // Set interval condition

  routingMachine = instance; 
  return instance;
};



alert("CREATING A ROUTING MACHINE");
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

export function setCheap2(){
  if(routingMachine != null){
    alert("Setting Cheap2")
    const newWaypoint = instance.getWaypoints()[0].latLng;
    const newLat = newWaypoint.lat + 0.01;
    const newLng = newWaypoint.lng + 0.01;
    routingMachine.setWaypoints([
      L.latLng(wayPointsGas[0][0], wayPointsGas[0][1]),
      L.latLng(wayPointsGas[1][0], wayPointsGas[1][1]),
      L.latLng(wayPointsGas[2][0], wayPointsGas[2][1]),

    ]);
  }
}
export function setShort2(){

  if(routingMachine != null){
    alert("Setting Short2")

    const newWaypoint = instance.getWaypoints()[0].latLng;
    const newLat = newWaypoint.lat + 0.01;
    const newLng = newWaypoint.lng + 0.01;
    routingMachine.setWaypoints([
      L.latLng(wayPointsShortest[0][0], wayPointsShortest[0][1]),
      L.latLng(wayPointsShortest[1][0], wayPointsShortest[1][1]),
      L.latLng(wayPointsShortest[2][0], wayPointsShortest[2][1]),

    ]);
  }
}
