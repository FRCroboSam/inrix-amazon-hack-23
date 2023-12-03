"use client";
import MyMap from './components/map'
import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar.jsx';
import MapSwitchButton from './components/mapSwitchButton';

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
        
        [37.77309957872636,-122.41037895366077],
        [37.77387109653664, -122.40859446108898]
                
      ]);

      setPoint2([
        [37.77387109653664, -122.40859446108898],
        [37.77498722076416, -122.41162061691284],
      ]);

      // setPoint3([
      //   [37.77387109653664, -122.40859446108898],
      //   [37.771857191904395, -122.40527743878388],
      // ]);

      console.log("WAYPOINT 1: " + wayPoint1);
      alert(wayPoint1);
    } catch (error) {
      alert("meep", error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-full bg-white h-screen">
      <MyMap point1={point1} point2={point2} point3={point3} />

      
    <Sidebar/>
    <div style={{ position: 'absolute', top: 50, right: 50, zIndex: 1000 }}>
          <MapSwitchButton />
        </div>
    </div>
  );
}
