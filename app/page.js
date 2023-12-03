"use client";
import MyMap from "./components/map";
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar.jsx';

export default function Home() {
  const [point1, setPoint1] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  const [point2, setPoint2] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  const [point3, setPoint3] = useState([
    [0.00, 0.00],
    [0.00, 0.00],
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/findRoute");
      const result = await response.json();

      const wayPoint1 = result.json2.result.trip.wayPoints[0].geometry.coordinates[0];

      setPoint1([
        [37.7749, -122.4194],
        [38.0648, -122.3194],
      ]);

      setPoint2([
        [37.7749, -122.4194],
        [38.1648, -122.5194],
      ]);

      setPoint3([
        [37.7749, -122.4194],
        [38.2648, -122.4194],
      ]);

      console.log("WAYPOINT 1: " + wayPoint1);
      alert(wayPoint1);
    } catch (error) {
      alert("meep", error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-full">
      <MyMap point1={point1} point2={point2} point3={point3} />
      <Sidebar />
      <div className="bg-gray-200 w-1/4 p-4">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <p>Some sidebar content...</p>
      </div>
      <button className="btn btn-outline">Cheap Option</button>
    </div>
  );
}
