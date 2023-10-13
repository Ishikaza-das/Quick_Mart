import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/Home.css";
import Man_img from "../Image/Man.png";
import Woman_img from "../Image/dress.png";
import Kid_img from "../Image/baby-clothing.png";
import Electronics_img from "../Image/electronics.png";
import Gadgets_img from "../Image/gadgets.png";
import Best_Price from "../Image/best-price.png";
import Man from "../Categories/Man";
import Woman from "../Categories/Woman";
import Kid from "../Categories/Kid";
import Electronic from "../Categories/Electronic";
import HomeApplience from "../Categories/HomeApplience";
import BestOffer from "../Categories/BestOffer";
import { Link, Route, Routes } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  return (
    <>
      <div className="home-section">
        <Slider {...settings} className="slider">
          <div className="random">
            <h3>Slide 1</h3>
          </div>
          <div className="random">
            <h3>Slide 2</h3>
          </div>
          <div className="random">
            <h3>Slide 3</h3>
          </div>
        </Slider>
        <div className="categorie-section">
          <div className="section">
            <Link to="/Man" style={{ textDecoration: "none" }}>
              <img src={Man_img} alt="img" />
              <h5>Man</h5>
            </Link>
          </div>
          <div className="section">
            <Link to="/Woman" style={{ textDecoration: "none" }}>
              <img src={Woman_img} alt="img" />
              <h5>Woman</h5>
            </Link>
          </div>
          <div className="section">
            <Link to="/Kid" style={{ textDecoration: "none" }}>
              <img src={Kid_img} alt="img" />
              <h5>Kid</h5>
            </Link>
          </div>
          <div className="section">
            <Link to="/Electronic" style={{ textDecoration: "none" }}>
              <img src={Electronics_img} alt="img" />
              <h5>Electronics</h5>
            </Link>
          </div>
          <div className="section">
            <Link to="/Home_applience" style={{ textDecoration: "none" }}>
              <img src={Gadgets_img} alt="img" />
              <h5>Home Applience</h5>
            </Link>
          </div>
          <div className="section">
            <Link to="/Best offer" style={{ textDecoration: "none" }}>
              <img src={Best_Price} alt="img" />
              <h5>Best offer</h5>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/Man" element={<Man />} />
          <Route path="/Woman" element={<Woman />} />
          <Route path="/Kid" element={<Kid />} />
          <Route path="/Electronic" element={<Electronic />} />
          <Route path="/Home_applience" element={<HomeApplience />} />
          <Route path="/Best_offer" element={<BestOffer />} />
        </Routes>
        
      </div>
    </>
  );
};

export default Home;
