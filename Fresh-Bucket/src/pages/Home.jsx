import React from "react";
import Navbar from "../components/Nav/Navbar";
import Hero from "../components/Hero/Hero";
import Service from "../components/Services/Service";
import FreshProducts from "../components/Fresh/FreshProducts";
import SaleWeek from "../components/SaleWeek/SaleWeek";
import FreshBucket from "../components/ FreshBucket/ FreshBucket";
import Footer from "../components/Footer/Footer";
import InternationalYear from "../components/InternationalYear/InternationalYear";
import FoodStore from "../components/ FoodStore/ FoodStore";
import BestOrganicProducts from "../components/Organic/BestOrganicProducts";

function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <BestOrganicProducts />
      <FreshProducts />
      <SaleWeek />
      <FreshBucket />
      <InternationalYear />
      <FoodStore />
      <Footer />
    </div>
  );
}

export default Home;
