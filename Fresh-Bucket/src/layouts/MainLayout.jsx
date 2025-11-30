import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;

//<Navbar /> → Always visible on every page.
{
  /* <Outlet /> → This is where the child routes (pages) will be displayed dynamically. */
}
