"use client";
import MyMap from "./components/map"
import React from "react";

export default function Home() {
  return (
    <div class="h-full">
      <MyMap/>
      <p>This is the home page!</p>
    </div>
  );
}