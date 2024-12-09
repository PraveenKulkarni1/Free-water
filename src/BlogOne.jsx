import React from "react";
import "./blogOne.css";
import { NavLink } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMediaQuery from "./Component/useMediaQuery";
const BlogOne = () => {
  const isMobile = UseMediaQuery("(max-width:768px)");
  const blogCard = [
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP1.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP2.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP3.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP4.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP5.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
    {
      title: "Demi WIlkinson • 1 Jan 2023",
      image: "./assets/BlogOneP6.png",
      description:
        "FreeWater is Pioneering the concept of free water distribution while simultaneously generating ...",
    },
  ];

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
          <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
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
          <h3 className="blogh1 my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            Recent blog posts
          </h3>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-6   ">
            <div className="bImg1">
              <img src="./assets/BlogOne1.png" className="BlogImg1" />
            </div>
            <div className="">
              <p className="blogp1 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2 mt-2">
                Olivia Rhye • 1 Jan 2024
              </p>
              <h3 className="blogh1 d-flex justify-content-between">
                It’s Free Water review presentations{" "}
                <span>
                  {" "}
                  <MdArrowOutward />
                </span>
              </h3>
              <p className="blogp2 mt-2">
                This Brand Makes Money by Selling Water for Free: FreeWater's
                Model<p>Read More...</p>
              </p>
              <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                <li className="nav-item blogNav1">
                  <NavLink
                    to="/advertise"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Advertise
                  </NavLink>
                </li>

                <li className="nav-item p-0 blogNav2">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Reserach
                  </NavLink>
                </li>
                <li className="nav-item p-0 blogNav3">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Presentation
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-6 ">
                <img src="./assets/BlogOne2.png" className="BlogImg2" />
              </div>
              <div className="col-6">
                <p className="blogp1 mt-2">Phoenix Banker • Jan 2024</p>
                <h3 className="blogcol2h1 ">
                  <span className="text-decoration-underline">FreeWater</span>{" "}
                  is Poineering the.
                </h3>
                <p className="blogp2 mt-2">
                  FreeWater is Pioneering the concept of free water distribution
                  while simulaneously generating revenue and aiding...
                </p>
                <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                  <li className="nav-item blogNav1">
                    <NavLink
                      to="/advertise"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Advertise
                    </NavLink>
                  </li>

                  <li className="nav-item p-0 blogNav3">
                    <NavLink
                      to="/terms-condition"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Reserach
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-6 ">
                <img src="./assets/BlogOne3.png" className="BlogImg2" />
              </div>
              <div className="col-6">
                <p className="blogp1 mt-2">Phoenix Banker • Jan 2024</p>
                <h3 className="blogcol2h1 ">
                  <span className="text-decoration-underline">FreeWater</span>{" "}
                  is Poineering the.
                </h3>
                <p className="blogp2 mt-2">
                  FreeWater is Pioneering the concept of free water distribution
                  while simulaneously generating revenue and aiding...
                </p>
                <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                  <li className="nav-item blogNav1">
                    <NavLink
                      to="/advertise"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Advertise
                    </NavLink>
                  </li>

                  <li className="nav-item p-0 blogNav3">
                    <NavLink
                      to="/terms-condition"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Reserach
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="col-md-6">
                <img src="" />
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        <div className="row blogOneSecTwo my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
          <div className="col-md-6">
            <div className="bImg1">
              <img src="./assets/BlogOne4.png" className="blog2Img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <p className="blogp1 ">Olivia Rhye • 1 Jan 2023</p>
              <h3 className="blogh1 d-flex justify-content-between">
                It’s Free Water's strategy extends beyond its ...
                <span>
                  {" "}
                  <MdArrowOutward />
                </span>
              </h3>
              <p className="blogp2 mt-2">
                It’s Free Water's strategy extends beyond its product to its
                digital presence, particularly on social media platforms like
                TikTok and Instagram, where they've gained significant traction
                and interest from brands, investors, and consumers globally.
                This approach not only markets their product but also amplifies
                their charitable mission.
              </p>
              <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                <li className="nav-item blogNav1">
                  <NavLink
                    to="/advertise"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Design
                  </NavLink>
                </li>

                <li className="nav-item p-0 blogNav2">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  ></NavLink>
                </li>
                <li className="nav-item p-0 blogNav3">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Presentation
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 
        <div className="row">
          <h3 className="blogh1 my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            Recent blog posts
          </h3>

          {blogCard?.map((item, i) => {
            let { image, title, description } = item;
            return (
              <div key={i} className="">
                <div className="col-md-4 ">
                  <img src={image} className="BlogCardImg" />
                  <div className="">
                    <p className="blogp1 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2 mt-2">
                      {title}
                    </p>
                    <div className="d-flex justify-content-between">
                      <h3 className="blogcol2h1 ">
                        <span className="text-decoration-underline">
                          FreeWater
                        </span>{" "}
                        is Poineering the.
                      </h3>
                      <span className="blogcol2h1 ">
                        {" "}
                        <MdArrowOutward />
                      </span>
                    </div>
                    <p className="blogp12 mt-2">{description}</p>
                    <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                      <li className="nav-item blogNav1">
                        <NavLink
                          to="/advertise"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Advertise
                        </NavLink>
                      </li>

                      <li className="nav-item p-0 blogNav2">
                        <NavLink
                          to="/terms-condition"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Reserach
                        </NavLink>
                      </li>
                      <li className="nav-item p-0 blogNav3">
                        <NavLink
                          to="/terms-condition"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          Presentation
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
        <div className="container">
          <h3 className="blogh1 my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            Recent Blog Posts
          </h3>
          <div className="row">
            {isMobile ? (
              <>
                <Slider {...settings}>
                  {blogCard.map((item, i) => {
                    let { image, title, description } = item;
                    return (
                      <div key={i} className="col-md-4 mb-4 cardB3Main">
                        {" "}
                        {/* Adjusts spacing between cards */}
                        <div className="card cardB3 ">
                          <img
                            src={image}
                            className="card-img-top BlogCardImg"
                            alt="Blog"
                          />
                          <div className="card-body b2CardBody">
                            <p className="blogp1 ">{title}</p>
                            <div className="d-flex justify-content-between">
                              <h3 className="blogcol2h1">
                                <span className="text-decoration-underline">
                                  FreeWater
                                </span>{" "}
                                is Pioneering the.
                              </h3>
                              <span className="blogcol2h1">
                                {" "}
                                <MdArrowOutward />
                              </span>
                            </div>
                            <p className="blogp2 mt-2">{description}</p>
                            <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 d-flex flex-row">
                              <li className="nav-item blogNav1">
                                <NavLink
                                  to="/advertise"
                                  className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                  }
                                >
                                  Advertise
                                </NavLink>
                              </li>
                              <li className="nav-item p-0 blogNav2">
                                <NavLink
                                  to="/terms-condition"
                                  className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                  }
                                >
                                  Research
                                </NavLink>
                              </li>
                              <li className="nav-item p-0 blogNav3">
                                <NavLink
                                  to="/terms-condition"
                                  className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                  }
                                >
                                  Presentation
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </>
            ) : (
              <>
                {blogCard.map((item, i) => {
                  let { image, title, description } = item;
                  return (
                    <div key={i} className="col-md-6 mb-4 col-lg-4">
                      {" "}
                      {/* Adjusts spacing between cards */}
                      <div className="card blog1Card">
                        <img
                          src={image}
                          className="card-img-top BlogCardImg"
                          alt="Blog"
                        />
                        <div className="card-body b1CardBody">
                          <p className="blogp1 mt-xl-2 mt-lg-2  mt-0">
                            {title}
                          </p>
                          <div className="d-flex justify-content-between">
                            <h3 className="blogcol2h1">
                              <span className="text-decoration-underline">
                                FreeWater
                              </span>{" "}
                              is Pioneering the.
                            </h3>
                            <span className="blogcol2h1">
                              {" "}
                              <MdArrowOutward />
                            </span>
                          </div>
                          <p className="blogp2 mt-2">{description}</p>
                          <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-2 gap-md-2 gap-sm-1 gap-1 d-flex flex-row">
                            <li className="nav-item blogNav1">
                              <NavLink
                                to="/advertise"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                              >
                                Advertise
                              </NavLink>
                            </li>
                            <li className="nav-item p-0 blogNav2">
                              <NavLink
                                to="/terms-condition"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                              >
                                Research
                              </NavLink>
                            </li>
                            <li className="nav-item p-0 blogNav3">
                              <NavLink
                                to="/terms-condition"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                              >
                                Presentation
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>

      <FollowInsta />
      <GetForm />
      {/* <div className="col-md-4 ">
            <img src="./assets/BlogOneP1.png" className="BlogCardImg" />
            <div className="">
              <p className="blogp1 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-2 mt-2">
                Olivia Rhye • 1 Jan 2024
              </p>
              <div className="d-flex justify-content-between">
                <h3 className="blogcol2h1 ">
                  <span className="text-decoration-underline">FreeWater</span>{" "}
                  is Poineering the.
                </h3>
                <span className="blogcol2h1 ">
                  {" "}
                  <MdArrowOutward />
                </span>
              </div>
              <p className="blogp12 mt-2">
                FreeWater is Pioneering the concept of free water distribution
                while simultaneously generating ...
              </p>
              <ul className="navbar-nav mb-2 mb-lg-0 w-100 gap-lg-4 gap-md-3 gap-sm-3 gap-3 mr-2 d-flex  flex-row">
                <li className="nav-item blogNav1">
                  <NavLink
                    to="/advertise"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Advertise
                  </NavLink>
                </li>

                <li className="nav-item p-0 blogNav2">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Reserach
                  </NavLink>
                </li>
                <li className="nav-item p-0 blogNav3">
                  <NavLink
                    to="/terms-condition"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Presentation
                  </NavLink>
                </li>
              </ul>
            </div>
          </div> */}
    </>
  );
};

export default BlogOne;
