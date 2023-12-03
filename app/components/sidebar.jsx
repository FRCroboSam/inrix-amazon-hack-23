import React, { useState } from 'react';

export default function Sidebar() {
  const [rangeValue, setRangeValue] = useState(5);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

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
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />

        <div>
          <p>to</p>
          <input
            type="text"
            placeholder="Type here"
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
        <button className="btn btn-outline">Cheap Option</button>
      </div>
    </div>
  );
}
