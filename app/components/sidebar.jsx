import React, { useState } from 'react';
import {getWayPointsGas, getWayPointShort, setShort2} from '../components/RoutingMachine'
import {wayPointsShortest, wayPointsGas} from '../components/constant.js'


//export default function
const Sidebar = ({ handleData }) => {
  const [rangeValue, setRangeValue] = useState(0);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
 
  // Function to handle some action and update shared data
  const handleAction = (currentRoute, isGas) => {
    handleData(currentRoute, isGas); // Update shared data in the parent
  };
  if(rangeValue > 50){
    handleAction(wayPointsShortest, false);
    setShort2
  }
 

  function getWayPointGas(){
    alert("way point is gas")
    handleAction(wayPointsGas, true);
  }
  function setWayPointShort(){
    alert("way point is short")
    handleAction(wayPointsShortest, false);
  }

  return (
    <div className="drawer bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-white" />
      <div className="drawer-content flex flex-col items-center justify-center bg-white">
        <label htmlFor="my-drawer-2" className="btn btn-primary bg-white drawer-button lg:hidden">
          Open drawer
        </label>
      </div>

      <div className="bg-white p-7 text-black font-bold">
        <p>Destination:</p>
        <input
          type="text"
          placeholder="Search destination..."
          className="input input-bordered w-full max-w-xs bg-white"
        />

        <div>
          <p>to</p>
          <input
            type="text"
            placeholder="Search destination..."
            className="input input-bordered w-full max-w-xs bg-white"
          />

          <p className="pt-4">Gas Price Range</p>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-white border border-gray-400"
          />
          <p>${rangeValue}</p>
        </div>

        <button className="btn btn-outline" onClick={getWayPointGas} >Cheap Option</button>
        <button className="btn btn-outline" onClick={setWayPointShort} >Quick Option</button>
      </div>
    </div>
    
  );
};

export default Sidebar;