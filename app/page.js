"use client";
import MyMap from "./components/map"
import React from "react";
import Sidebar from './components/sidebar.jsx';

export default function Home() {
  return (
    <div class="h-full">
      
      <MyMap/>
      <Sidebar/>
      <div class="bg-gray-200 w-1/4 p-4">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <h2 class="text-lg font-semibold mb-4">Sidebar</h2>
        <p>Some sidebar content...</p>
    </div>
    </div>
  );
}