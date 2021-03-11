import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles.css";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}
