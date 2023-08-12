import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

function HomeTemplate() {
  return (
    <div>
      <Header />

      {/*
       * Home
       * Contact
       * About
       */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default HomeTemplate;
