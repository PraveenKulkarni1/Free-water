import React from "react";
import { NavLink } from "react-router-dom";
import "./advertise.css";
import FollowInsta from "./Component/FollowInsta";
import AdSlider from "./Component/AdSlider";
import { useNavigate } from "react-router-dom";

const Advertise = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead">Advertise</h1>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex justify-content-center flex-row">
              <li className="nav-item adsNav">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item p-0 adsNav2 mt-1 mt-lg-0 mt-xl-0 mt-md-2 mt-sm-2">
                <NavLink
                  to="/Advertise"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Advertise
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* adSection One start */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-between adSecOne">
          {/* <div className="col-md-6 advBotBg my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 ">
            <img src="./assets/advBot1.png" className="advBotImg1" />
            <img src="./assets/advBot2.png" className="advBotImg2 " />
            <img src="./assets/advBot3.png" className="advBotImg3 " />
          </div> */}
          <div className="col-md-6 advBotOneBg  ">
            <img src="./ff.png" className="advBotOneImg1" />
            {/* <img src="./assets/advBot2.png" className="advBotImg2 " />
            <img src="./assets/advBot3.png" className="advBotImg3 " /> */}
          </div>
          <div className="col-md-6 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 secOneCol2">
            <div className="adBtndiv">
              <p className="adSecOneBtn">Branding</p>
            </div>
            <h1 className="adsSecOneH1">PUT YOUR BRAND IN EVERYONE’S HAND™</h1>
            <p
              className="adsSecOneP1
            
            my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3"
            >
              Receive meaningful impressions and utilize the greatest brand
              loyalty platform in the ad industry.
            </p>
            <div className="d-flex my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3">
              <p className="adsIconone">
                <img src="./assets/Vector.png" className="vectorImg" />
                Use QR Codes
              </p>
              <p className="adsIconone">
                <img src="./assets/Vector.png" className="vectorImg" />
                Sell or Freely Distribute
              </p>
            </div>
            <div className="d-flex my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3  d-flex row-gap-5">
              <p className="adsIconone">
                <img src="./assets/Vector.png" className="vectorImg " />
                Subsidize
              </p>
              <p className="adsIconone">
                <img src="./assets/Vector.png" className="vectorImg" />
                Choose a Distribution Model
              </p>
            </div>
            <div className="d-flex  gap-3 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 ">
              <p className="adsIconone m-0">
                <img src="./assets/Vector.png" className="vectorImg " />
                Cover the Entire Cost by Sharing the Ad Space
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* adSection One end */}

      {/* adSection Two end */}

      <div className="container-fluid adStaticBg">
        <div className="container">
          <div className="row adStaicRow">
            <div className="col-md-3  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
              <div className="d-flex gap-3  ">
                <img src="./assets/staic1.png" className="adStaticImg" />
                <div className="d-flex flex-column">
                  <h3 className="adStaticH3">10x</h3>
                  <p className="adStaticP">more impressions than direct mail</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
              <div className="d-flex gap-3  ">
                <img src="./assets/staic2.png" className="adStaticImg" />
                <div className="d-flex flex-column">
                  <h3 className="adStaticH3">$2.50</h3>
                  <p className="adStaticP">
                    cheaper per ten impressions than direct mail
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
              <div className="d-flex gap-3  ">
                <img src="./assets/staic3.png" className="adStaticImg" />
                <div className="d-flex flex-column">
                  <h3 className="adStaticH3">29%</h3>
                  <p className="adStaticP">return on investment</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
              <div className="d-flex gap-3  ">
                <img src="./assets/staic4.png" className="adStaticImg" />
                <div className="d-flex flex-column">
                  <h3 className="adStaticH3">Priceless</h3>
                  <p className="adStaticP">
                    saving lives and helping the planet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* adSection Two end */}
      {/* adSection Three start */}
      <section className="container-fluid ">
        <div className="row ">
          <div className="col-6 col-lg-6 py-2 py-xl-5 py-lg-5 py-md-3 py-sm-2  adSec3Col1">
            <h1 className="adSec2Head">It's a mini billboard in your hands</h1>
          </div>

          <div className="adSec3Bg col-6 col-lg-6 col-md-6 advBotBg ">
            {/* You can add content here for the info section */}

            <img src="./assets/advBot1.png" className="advBotImg1" />
            <img src="./assets/advBot2.png" className="advBotImg2 " />
            <img src="./assets/advBot3.png" className="advBotImg3 " />
          </div>
        </div>
      </section>
      {/* adSection Three end */}

      {/* adSection Four start */}
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1">This Is What Our Customers Say</h1>
            <p className="adSecFourp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis
            </p>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12 abBotMain">
            <div className="adBotRelative">
              <img src="./assets/adBtl1.png" className="adBotImg4" />
              <div className="">
                <img src="./assets/adBtl2.png" className="adBotImg1" />
                <img src="./assets/adBtl2.png" className="adBotImg2" />
                <img src="./assets/adBtl2.png" className="adBotImg3" />

                <img src="./assets/adBtl2.png" className="adBotImg5" />
                <img src="./assets/adBtl2.png" className="adBotImg6" />
                <img src="./assets/adBtl2.png" className="adBotImg7" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <img src="./assets/GroupBtl.png" className="groupBtl" />
          </div>
          <div className="col-12 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <div className="d-flex justify-content-center align-items-center">
              <button className="adInqBtn" onClick={() => navigate("/inquiry")}>
                Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <AdSlider />

      {/* adSection Four end */}
      <FollowInsta />
    </>
  );
};

export default Advertise;
