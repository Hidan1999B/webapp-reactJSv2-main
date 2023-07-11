import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import BarCategories from "../components/BarCategories";
import ReviewImages from "../components/Reviews";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <BarCategories/>
      <Slider />
      <Categories />
      <ReviewImages/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
