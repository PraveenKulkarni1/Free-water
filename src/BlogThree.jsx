import React from "react";
import "./blogThree.css";
import { NavLink, useNavigate } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import UseMediaQuery from "./Component/useMediaQuery";
const BlogThree = () => {
  const navigate = useNavigate();
  const isMobile = UseMediaQuery("(max-width:768px)");
  const NextArrow = ({ onClick }) => (
    <div className="blog1Arrow blog1Next" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="blog1Arrow blog1Prev" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,

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
  const blogCard = [
    {
      image: "./assets/b3card21.png",
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
    {
      image: "./assets/b3card22.png",
      title: "Best Website to research for your  next project",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    },
    {
      image: "./assets/b3card23.png",
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
    },
    {
      image: "./assets/b3card24.png",
      title: "Who is the best singer on chart?Know him?",
      description:
        "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ",
    },
    {
      image: "./assets/b3card25.png",
      title: "How to start export import business from home?",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    },
    {
      image: "./assets/b3card26.png",
      title: "Make some drinks with chocolates chocolates and milk",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    },
  ];
  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead"> Terms and Conditions</h1>
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

              <li className="nav-item p-0 adsNav2 ">
                <NavLink
                  to="/terms-condition"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Terms and Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RevolutionAds />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1"> Our Blogs</h1>
            <p className="adSecFourp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src="./assets/blog3Con1.png" className="blog3sec1Img" />
          </div>
          <div className="col-8 b3col2 ">
            <p className="d-flex gap-3 b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
              DEVELOPMENT <span className="b3colspan1">16 March 2023</span>
            </p>
            <h2 className="b3col2h2">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="b3col2p2">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <button className="b3sec1Btn">Read More</button>
          </div>

          <></>
        </div>
      </div>
      <div className="container">
        <div className="row  ">
          <div className="col-12 d-flex justify-content-between my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1">Our Recent Post</h1>
            <button className="b3sec2btn">View All</button>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-7">
            {" "}
            <img src="./assets/blog3Con2.png" className="blog3sec2Img" />
          </div>
          <div className="col-md-5 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
            <p className="d-flex gap-3   b3col2p1 ">
              DEVELOPMENT <span className="b3colspan1">16 March 2023</span>
            </p>
            <h2 className="b3col2h2">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="b3col2p2">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <button className="b3sec1Btn mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2 mt-2">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="container my-2 my-xl-5  my-lg-5 my-md-3 my-sm-3">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 cardB3Main">
            <div className="card cardB3">
              <img
                src="./assets/b3Card1.png"
                className="card-img-top blog3sec3Img"
                alt="Sea Travel"
              />
              <div className="card-body">
                <p className="d-flex gap-3  b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                  Travel <span className="b3colspan1">16 March 2023</span>
                </p>
                <h2 className="b3col2h3">
                  8 Rules of Travelling In Sea You Need To Know
                </h2>
                <p className="b3col2p2">
                  Travelling in sea has many advantages. Some of the advantages
                  of transporting goods by sea include: you can ship large
                  volumes at costs
                </p>
                <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 cardB3Main">
            <div className="card cardB3">
              <img
                src="./assets/b3Card2.png"
                className="card-img-top blog3sec3Img"
                alt="UI/UX Portfolio"
              />
              <div className="card-body">
                <p className="d-flex gap-3 b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                  Development <span className="b3colspan1">13 March 2023</span>
                </p>
                <h2 className="b3col2h3">
                  How to build strong portfolio and get a Job in UI/UX
                </h2>
                <p className="b3col2p2">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from
                </p>
                <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 cardB3Main">
            <div className="card cardB3">
              <img
                src="./assets/b3Card3.png"
                className="card-img-top blog3sec3Img"
                alt="Professional Footballer"
              />
              <div className="card-body">
                <p className="d-flex gap-3 b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                  Sports <span className="b3colspan1">10 March 2023</span>
                </p>
                <h2 className="b3col2h3">
                  How to Be a Professional Footballer in 2023
                </h2>
                <p className="b3col2p2">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment. survival
                  strategies to ensure proactive
                </p>
                <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1">Popular Post</h1>
            <button className="b3sec2btn">View All</button>
          </div>
        </div>
        {/* <div className="row">
          {blogCard?.map((item, i) => {
            let { image, description, title } = item;
            return (
              <div key={i}>
                <div className="col-md-4">
                  <div className="card ">
                    <img src={image} className="blog3sec3Img" />
                    <div className="card-body ">
                      <p className="d-flex   b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                        Travel <span className="b3colspan1">16 March 2023</span>
                      </p>
                      <h2 className="b3col2h3">{title}</h2>
                      <p className="b3col2p2">{description}</p>
                      <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                        Read More
                      </button>
                    </div>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="row">
          {isMobile ? (
            <Slider {...settings}>
              {blogCard.map((item, i) => {
                let { image, description, title } = item;
                return (
                  <div
                    key={i}
                    className="col-md-6 col-sm-3  col-lg-4 mb-4 cardB3Main"
                  >
                    <div className="card cardB3">
                      <img
                        src={image}
                        className="card-img-top blog3sec3Img"
                        alt={title}
                      />
                      <div className="card-body">
                        <p className="d-flex gap-3  b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                          Travel{" "}
                          <span className="b3colspan1">16 March 2023</span>
                        </p>
                        <h2 className="b3col2h3">{title}</h2>
                        <p className="b3col2p2">{description}</p>
                        <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <>
              {blogCard.map((item, i) => {
                let { image, description, title } = item;
                return (
                  <div key={i} className=" col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                      <img
                        src={image}
                        className="card-img-top  blog3sec3Img"
                        alt={title}
                      />
                      <div className="card-body b2CardBody">
                        <p className="d-flex gap-3  b3col2p1 mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-1">
                          Travel{" "}
                          <span className="b3colspan1">16 March 2023</span>
                        </p>
                        <h2 className="b3col2h3">{title}</h2>
                        <p className="b3col2p2">{description}</p>
                        <button className="b3sec1Btn2 text-decoration-underline mt-xl-2 mt-lg-2 mt-md-2 mt-sm-1 mt-0">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="col-12 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <button className="adInqBtn" onClick={() => navigate("/inquiry")}>
            Inquiry Now
          </button>
        </div>
      </div>
      <FollowInsta />
      <GetForm />
    </>
  );
};

export default BlogThree;
