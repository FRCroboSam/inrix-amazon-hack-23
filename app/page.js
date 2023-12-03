"use client";
import MyMap from "./components/map"
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar.jsx';

export default function Home() {
    useEffect(() => {
    fetchData();
  }, []);
  return (
    <div class="h-full">
      
      <MyMap/>
      <Sidebar/>
      <div class="bg-gray-200 w-1/4 p-4">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <h2 class="text-lg font-semibold mb-4">Sidebar</h2>
        <p>Some sidebar content...</p>
      </div>
      <button className="btn btn-outline">Cheap Option</button>
    </div>
  );
}
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/findRoute"); // Replace "api/data" with the actual endpoint of your backend
    const result = await response.json();
    const wayPoint1 = result.json2.result.trip.wayPoints[0].geometry.coordinates[0];
    console.log("WAYPOINT 1: " + wayPoint1);
    alert(wayPoint1)
  } catch (error) {
    alert("meep", error)
    console.error("Error fetching data:", error);
  }
};

const extractPointsFromJson = (jsonData) => {
  alert("CORDS"  + coordinatesArray)

  const wayPoint1 = jsonData.json2.result.trip.wayPoints[0].geometry.coordinates[0];
  console.log("WAYPOINT 1: " + wayPoint1);



  const wayPoint2 = jsonData.json2.result.trip.wayPoints;

  const coordinatesArray = wayPoints.map(wayPoint => {
    const geometry = wayPoint.geometry;
    const coordinates = geometry.coordinates[0];

    return {
      id: wayPoint.id,
      coordinates: {
        longitude: coordinates[0],
        latitude: coordinates[1]
      }
    };
  });

  return coordinatesArray;
};