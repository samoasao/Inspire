import React from "react";
import Home from "./components/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import Marketplace from "./components/marketplace";
import User from "./components/user";
import Profile from "./pages/profile";

export default function App() {
  return (
    <main>
      {/* <Navbar />
      <Home />
      <Marketplace />
      <User /> */}
      <Login />
      <Signup/>
      <Profile/>
    </main>
  );
}