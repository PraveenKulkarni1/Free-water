import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./adSlider.css";
import Stars from "./Stars";
import UseMediaQuery from "./useMediaQuery";

const NextArrow = ({ onClick }) => (
  <div className="adArrow adNext" onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="adArrow adPrev" onClick={onClick}>
    <IoIosArrowBack />
  </div>
);
function AddSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    {
      name: "Jhon",
      image: "../assets/cardImg1.png",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      name: "Ram",
      image: "../assets/cardImg2.png",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      name: "Praveen",
      image: "../assets/cardImg3.jpg",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      name: "Hassan",
      image: "../assets/cardImg8.jpg",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      name: "Raju",
      image: "../assets/cardImg5.jpg",
      review:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
  ];

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <div className="container  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
        <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
          <h1 className="adSecFourh1">This Is What Our Customers Say</h1>
          <p className="adSecFourp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>
        <Slider
          {...settings}
          afterChange={(current) => setActiveIndex(current)}
        >
          {sliderData.map((img, idx) => {
            return (
              <div className="card adCard">
                <div
                  key={idx}
                  className={
                    idx == 0
                      ? "adSlide "
                      : idx === activeIndex
                      ? "adSlide adActiveSlide"
                      : "adSlide"
                  }
                >
                  <div className="conatiner">
                    <div className="row ">
                      <div className="col-4 ">
                        <div className="cardAbs  m-lg-3 m-xl-3 m-md-3 m-sm-3 m-0"></div>
                        <img
                          src={img.image}
                          className="img-fluid rounded-start cardAdImg mt-3"
                          alt="..."
                        />
                      </div>
                      <div className="col-8 mt-2">
                        <div className="card-body adCardBody">
                          <p className="card-text adCardText">{img.review}</p>
                          <p>
                            <Stars stars={5} />
                          </p>
                          <hr />
                          <h5 className="card-title adCardTitle">{img.name}</h5>
                          <p className="traveller"></p>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default AddSlider;
