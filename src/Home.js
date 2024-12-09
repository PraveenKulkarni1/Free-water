import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RevolutionAds from "./Component/RevolutionAds";
import GetForm from "./Component/GetForm";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import FAQSection from "./Component/FAQSecton";

function Home() {
  // const sliderData = [
  //   {
  //     image: "./assets/newBanner1.jpeg",

  //     text: "     Advertise with us",
  //   },
  //   {
  //     image: "./assets/newBanner2.jpeg",

  //     text: "     Advertise with us",
  //   },

  //   {
  //     image: "./assets/newBanner3.jpeg",

  //     text: "     Advertise with us",
  //   },

  //   {
  //     image: "./assets/newBanner4.jpeg",

  //     text: "     Advertise with us",
  //   },

  //   {
  //     image: "./assets/newBanner5.jpeg",

  //     text: "     Advertise with us",
  //   },
  //   {
  //     image: "./assets/newBanner6.jpeg",

  //     text: "     Advertise with us",
  //   },
  // ];

  function Arrow(props) {
    const { className, style, onClick, icon } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
          color: "blue",
          zIndex: 1,
          margin: "10%",
        }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* section 1 start */}

      {/* <section className="container-fluid ">
        <div className="row  ">
          <div className="col-12  sectionOne   p-0 ">
            <Slider {...settings}>
              {sliderData.map((item) => {
                let { image, text } = item;
                return (
                  <>
                    <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                      <img
                        className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                        src={image}
                        alt=""
                      />
                      <div className="sectionOneRow d-flex justify-content-center align-items-center flex-column mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1">
                        <Link to={"/Advertise"} className="sectionOneBtn">
                          {text}
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section> */}

      <section className="container-fluid ">
        <div className="row  ">
          <div className="col-12  sectionOne   p-0 ">
            <Slider {...settings}>
              {/* <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                <img
                  className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                  src="./assets/newBanner1.jpeg"
                  alt=""
                />
                <div className="sectionOneRow d-flex justify-content-center align-items-center flex-column mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1">
                  <p className="sectionOneP1">
                    Put Your Brand In Everyone's Hand!
                  </p>
                </div>
              </div> */}
              <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                <img
                  className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                  src="./assets/newBanner2.jpeg"
                  alt=""
                />
                <div className="sectionOneRow d-flex justify-content-center align-items-center flex-column mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1">
                  <p className="sectionOneP2">
                    Put Your Brand In Everyone's Hand!
                  </p>
                </div>
              </div>
              <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                <img
                  className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                  src="./assets/newBanner3.jpeg"
                  alt=""
                />
                <div className="col-6">
                  <p className="sectionOneP3">
                    Place your brand in The palm of their hands Where every
                    touch creates A Lasing imoression!
                  </p>
                </div>
              </div>
              <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                <img
                  className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                  src="./assets/newBanner4.jpeg"
                  alt=""
                />
                <div className="sectionOneRow d-flex justify-content-center align-items-center flex-column mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1">
                  <p className="sectionOneP4">
                    Put Your Brand In Everyone's Hand!
                  </p>
                </div>
              </div>
              <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                <img
                  className="img-fluid mb-2 mb-xl-4 mb-lg-4 mb-md-3 md-sm-3 p-0  "
                  src="./assets/newBanner5.jpeg"
                  alt=""
                />
                <div className="col-6">
                  {/* <p className="sectionOneP5">
                    Put Your Brand In Everyone's Hand!
                  </p> */}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* section 1 end */}

      {/* homePageTwo start */}

      <div className="container-fluid homeTwoSec">
        <div className="container">
          <div className="row">
            <div className="col-6 moreFirst  mt-3 mt-md-3 mt-sm-3 ">
              <h1 className="moreHead1 ">More to life.</h1>
              <h1 className="moreHead2">More to LIFEWTR.</h1>
              <p className="morePara mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2">
                Because it isnt just about the 9-5 existence
              </p>
              <p className="morePara">
                --to live a meaningful life,requires more.
              </p>
            </div>
            <di className="col-6"></di>
          </div>
        </div>
      </div>
      {/* <div className="col-md-4 mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2  homeTwo ">
              <img src="./assets/botHome.png" className="homeTwoImg" />
            </div> */}

      {/* <div className="container-fluid home2SecBg">
        <div className="row">
          <div className="col-6 moreFirst mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2  ">
            <h1 className="moreHead1 ">More to life.</h1>
            <h1 className="moreHead2">More to LIFEWTR.</h1>
            <p className="morePara">
              Because it isnt just about the 9-5 existence
            </p>
            <p className="morePara">
              --to live a meaningful life,requires more.
            </p>
          </div>
          <div className="col-6"></div>
        </div>
      </div> */}
      {/* homePageTwo end*/}

      {/* section 2 start */}

      <section className="  container-fluid staticImg ">
        <div className="row ">
          <div className="col-12 p-0  my-1 my-xl-5 my-lg-5 my-md-3 my-sm-1">
            <p className="staticFirst text-center ">
              The evolution of water — perfected to help you thrive.
            </p>
          </div>
        </div>
        <div className="row text-center col-12 col-lg-12 d-flex justify-content-center align-items-center  ">
          <div className="col-12 col-xl-3 col-lg-3  d-flex justify-content-center align-items-center flex-column ">
            <img
              className="img-fluid "
              src="./assets/droplet-1.mp4.png"
              alt=""
            />
            <h5 className="staticHead mb-3 mb-xl-5 mb-lg-5 mb-md-3 md-sm-3">
              7-Step, Enhanced Filtration Process
            </h5>
          </div>

          <div className="col-12 col-xl-3 col-lg-3  d-flex justify-content-center align-items-center flex-column">
            <img
              className="img-fluid"
              src="./assets/droplet-2.mp4.png"
              alt=""
            />
            <h5 className="staticHead mb-3 mb-xl-5 mb-lg-5 mb-md-3 md-sm-3">
              Electrolytes for pure Taste
            </h5>
          </div>

          <div className="col-12 col-xl-3 col-lg-3 d-flex justify-content-center align-items-center flex-column">
            <img
              className="img-fluid"
              src="./assets/droplet-3.mp4.png"
              alt=""
            />
            <h5 className="staticHead mb-3 mb-xl-5 mb-lg-5 mb-md-3 md-sm-3">
              Perfectly balanced PH
            </h5>
          </div>
        </div>
      </section>

      {/* section 2 end */}

      {/* homePageFour start */}
      {/* <div className="container-fluid homeThreeSec">
        <div className="row ">
          <div className="col-md-6 mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 homeThImg">
            <img src="./assets/freshhWater.jpeg " className="homeTImg" />
          </div>
          <div className="col-md-6  mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 homeThCont">
            <p className="homeTrPara ">
              JUST LIKE A PLANT SOAKS UP WATER LIFEWTR HYDRATES YOUR WHOLE BODY
              THE WAY NATURE INTENDED
            </p>
            <h1 className="homeTrHead mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 mr-0">
              HYDRATION STARTS NOW
            </h1>
          </div>
        </div>
      </div> */}

      <div className="container-fluid home3Bg">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 d-flex justify-content-end align-items-end flex-column">
            <div className="  mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 homeThCont">
              <p className="homeTrPara ">
                JUST LIKE A PLANT SOAKS UP WATER LIFEWTR HYDRATES YOUR WHOLE
                BODY THE WAY NATURE INTENDED
              </p>
              <h1 className="homeTrHead mt-1 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-1 mr-0">
                HYDRATION STARTS NOW
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* homePageFour end*/}
      {/* homePageFive start */}

      <div className="container-fluid homeFiveBg  my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2">
        <div className="row">
          <div className="col-12">
            <p className="text-center homeFivePara">Hydration in every size</p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col-9 ">
            <div className="hydroRelaive d-flex justify-content-center align-items-center flex-column">
              <img src="./assets/sun.png" className="homeFiveImg1  " />
              <div className="hydroAbs">
                <img
                  src="./assets/sunBottel.png"
                  className="homeFiveImg2  d-flex justify-content-center align-items-start "
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <img src="./assets/sunBottel.png" className="homeFiveImg3 " />
          </div>
        </div>
        {/* 
       
        <>{/* First Image (Above) */}

        {/* First Image (Above) */}

        {/* <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column my-3 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="ltHeadOne mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2">
              1L
            </h1>
            <h6 className="ltHeadTwo mt-2 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2">
              Purified water. Electrolytes for perfect taste.
            </h6>
            <p className="ltParaOne">
              Our 7-step, enhanced filtration process removes impurities to
              create pristine water. We then add a balanced blend of
              electrolytes for a pure taste—so your body can easily drink in the
              refreshing hydration and thrive.
            </p>
            <h6 className="ltHeadThree">Michela Picchi for LIFEWTR.</h6>

            <div className=" ltMain ">
              {" "}
              <p className="ltParaTwo d-flex gap-5  mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2">
                EXPLORE THE SERIES <HiOutlineArrowLongRight />
              </p>{" "}
            </div>

            <div className="">
              <p className="ltParaTwo d-flex gap-5  mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2">
                EXPLORE THE ARTIST <HiOutlineArrowLongRight />
              </p>{" "}
            </div>
          </div>
        </div> */}
      </div>
      {/* HomePageFive end */}

      {/* HomePageSix  start */}

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src="./assets/homeLImg.png " className="homeLImg" />
          </div>
        </div>
      </div> */}
      {/* HomePageSix end */}

      {/* section 4 start */}

      <section className=" container-fluid d-flex gap-4 sectionFour">
        <div className="container ">
          <div className="row  align-items-center justify-content-between my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3 ">
            <div className="col-md-5 col-lg-5 py-2  sectionFourColOne">
              <h1 className="fw-bold mb-1 mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 ">
                We are partnered with WellAware
              </h1>
              <p className="py-2">
                We donate fifty paisa per beverage to WellAware, an Indian based
                non-profit that builds water wells in Rajasthan. Every 150
                FreeWater donates enough money to provide one person with a safe
                water source for the rest of their life.
              </p>

              <div className="secFour ">
                {" "}
                <button className=" sectionFourBtn">Learn More</button>
              </div>
            </div>

            <div className="col-md-4 col-lg-6 py-2 sectionFourColTwo">
              <img className="" src="./assets/sectionFour.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section 4 end */}

      {/* section 5 start */}
      <RevolutionAds />
      {/* section 4 end */}

      {/* About start */}

      <div className="container-fluid homeAbtBg">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-md-5 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
              <h1 className="headAbtOne">About Us</h1>
              <p className="paraAbtOne">HEALTH, HAPPINESS, & SUSTAINABILITY</p>
              <p className="paraAbtTwo">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="secFour ">
                {" "}
                <button className=" sectionFourBtn">Learn More</button>
              </div>
            </div>
            <div className="col-md-6 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3 d-flex gap-2 gap-sm-3 gap-md-3 gap-lg-4 flex-column homeAbtTwo">
              <div className="homeBorder d-flex gap-1 gap-lg-4 gap-xl-4 gap-md-4 gap-sm-2 justify-content-around align-items-center">
                <h1 className="borderOne p-3">1</h1>
                <h5 className="borderTwo  m-0">
                  Wide Mouth Bottles To Clean Easily.
                </h5>
              </div>
              <div className="homeBorder2 d-flex gap-1 gap-lg-4 gap-xl-4 gap-md-4 gap-sm-2 justify-content-around align-items-center ">
                <h1 className="borderOne p-3">2</h1>
                <h5 className="borderTwo m-0 ">
                  Insulated Bottles For Hot And Cold Technology
                </h5>
              </div>
              <div className="homeBorder d-flex gap-1 gap-lg-4 gap-xl-4 gap-md-4 gap-sm-2 justify-content-around align-items-center">
                <h1 className="borderOne p-3">3</h1>
                <h5 className="borderTwo  p-1 m-0">
                  Variation In Sizes, Styles, And Material
                </h5>
              </div>
              <div className="homeBorder d-flex gap-1 gap-lg-4 gap-xl-4 gap-md-4 gap-sm-2s justify-content-around align-items-center">
                <h1 className="borderOne p-3">4</h1>
                <h5 className="borderTwo  m-0">
                  Made In India To Serve Authenticity
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About end */}

      {/* section 7 starts */}

      {/* <div className="container-fluid secSevenBg">
        <div className="container">
          <div className="row">
            <div className="col-12 sevelCol my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
              <div className="border-bottom border-info py-3 px-5 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
                <div
                  className="d-flex justify-content-between align-items-center "
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex gap-5 justify-content-center align-items-center">
                    <h1 className="sevenSLNo">01</h1>
                    <h5 className="sevenContent">Where can I watch?</h5>
                  </div>
                  <h3>+</h3>
                </div>
                <div className="collapse" id="collapseExample1">
                  <div className=" colOption">
                    Nibh quisque suscipit fermentum netus nulla cras porttitor
                    euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                    venenatis. Fermentum sulla craspor ttitore ismod nulla.
                  </div>
                </div>
              </div>
              <div className="border-bottom border-info py-3 px-5 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
                <div
                  className="d-flex justify-content-between align-items-center "
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex gap-5 justify-content-center align-items-center">
                    <h1 className="sevenSLNo">01</h1>
                    <h5 className="sevenContent">Where can I watch?</h5>
                  </div>
                  <h3>+</h3>
                </div>
                <div className="collapse" id="collapseExample1">
                  <div className=" colOption">
                    Nibh quisque suscipit fermentum netus nulla cras porttitor
                    euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                    venenatis. Fermentum sulla craspor ttitore ismod nulla.
                  </div>
                </div>
              </div>
              <div className="border-bottom border-info py-3 px-5 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
                <div
                  className="d-flex justify-content-between align-items-center "
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex gap-5 justify-content-center align-items-center">
                    <h1 className="sevenSLNo">01</h1>
                    <h5 className="sevenContent">Where can I watch?</h5>
                  </div>
                  <h3>+</h3>
                </div>
                <div className="collapse" id="collapseExample1">
                  <div className=" colOption">
                    Nibh quisque suscipit fermentum netus nulla cras porttitor
                    euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                    venenatis. Fermentum sulla craspor ttitore ismod nulla.
                  </div>
                </div>
              </div>
              <div className="border-bottom border-info py-3 px-5 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
                <div
                  className="d-flex justify-content-between align-items-center "
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex gap-5 justify-content-center align-items-center">
                    <h1 className="sevenSLNo">01</h1>
                    <h5 className="sevenContent">Where can I watch?</h5>
                  </div>
                  <h3>+</h3>
                </div>
                <div className="collapse" id="collapseExample1">
                  <div className=" colOption">
                    Nibh quisque suscipit fermentum netus nulla cras porttitor
                    euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                    venenatis. Fermentum sulla craspor ttitore ismod nulla.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <FAQSection />

      {/* section 7 end */}
      <GetForm />
    </div>
  );
}

export default Home;
