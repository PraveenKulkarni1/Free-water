import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const sliderData = [
    {
      image: "./IMG-20241108-WA0014.jpg",
      describe: "Put Your Brand In Everyone's Hand!",
      text: "     Advertise with us",
    },
    {
      image: "./advertise1.jpg",
      describe: "Put Your Brand In Everyone's Hand!",
      text: "     Advertise with us",
    },
    {
      image: "./IMG-20241107-WA0008.jpg",
      describe: "Put Your Brand In Everyone's Hand!",
      text: "     Advertise with us",
    },

    {
      image: "./IMG-20241107-WA0009.jpg",
      describe: "Put Your Brand In Everyone's Hand!",
      text: "     Advertise with us",
    },
  ];

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

      <section className="container-fluid">
        <div className="row  ">
          <div className="col-12  sectionOne mb-5 ">
            <Slider {...settings}>
              {sliderData.map((item) => {
                let { image, describe, text } = item;
                return (
                  <div className="sectionMap  d-flex justify-content-center align-items-center flex-column border-0">
                    <img
                      className="mb-2 mb-xl-3 mb-lg-3 mb-md-2 md-sm-2 "
                      src={image}
                      alt=""
                    />
                    <div className="sectionOneRow d-flex justify-content-center align-items-center flex-column mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1">
                      <p>{describe}</p>

                      <Link
                        to={"/Advertise"}
                        className="btn btn-outline-dark  rounded-5 py-2 px-4 sectionOneLink mb-1 mb-xl-3 mb-lg-3 mb-md-2 md-sm-1"
                      >
                        {text}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* section 1 end */}

      {/* section 2 start */}

      <section className="  staticImg ">
        <div className="row text-center col-12 col-lg-12 d-flex jusdtify-content-center   ">
          <div className="col-12 col-xl-3 p-lg-5 ">
            <img
              className="img-fluid "
              src="https://static.wixstatic.com/media/bfcb9b_b49827742e3f4fd1b62d97bedd6e0d82~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt=""
            />
            <h5 className="">Save Money</h5>
            <div className="staticPara">
              <p style={{ fontSize: "18px" }}>
                Bottled water costs 2,000 times the price of tap water
              </p>
            </div>
          </div>

          <div className="col-12 col-xl-3  p-lg-5">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/bfcb9b_8428e536e2c84887be07349a8567d661~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt=""
            />
            <h5>Eco Friendly</h5>
            <div className="staticPara">
              {" "}
              <p style={{ fontSize: "18px" }}>
                Our goal is to be net positive by 2030
              </p>
            </div>
          </div>

          <div className="col-12 col-xl-3 p-lg-5">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/bfcb9b_d86c93d475f044b98a98894752b2969b~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt=""
            />
            <h5>Premium Water</h5>
            <div className="staticPara">
              {" "}
              <p style={{ fontSize: "18px" }}>
                FreeWater is natural spring water and all of our containers are
                BPA free
              </p>
            </div>
          </div>

          <div className="col-12 col-xl-3 p-lg-5">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/bfcb9b_918f7ef38a0a42358efab157edf47c31~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"
              alt=""
            />
            <h5>Save Lives</h5>
            <div className="staticPara">
              <p style={{ fontSize: "18px" }}>
                Ten cents from each beverage is donated to charity to build
                water wells for people in need
              </p>
            </div>
          </div>
        </div>
      </section>

      <></>
      {/* section 2 end */}

      {/* section 3 start */}

      <section className="  container-fluid justify-content-cener align-items-center sectionThreeBg ">
        <div className="container">
          <div className="row my-lg-3 my-3 my-xl-5 my-md-3  my-sm-2 my-2    sectionThree">
            <div className=" col md-6 d-flex justify-content-center col-lg-6 py-2 ">
              {/* <video className='img-fluid' loop="loop" muted="muted" autoPlay="autoplay">

                            <source src='https://video.wixstatic.com/video/bfcb9b_7acc406637ce4727ad0391a8ef6b86fb/720p/mp4/file.mp4'></source>

                        </video> */}

              <img className="img-fluid " src="./home2.jpg" alt="" />
            </div>

            <div className=" col-md-6 col-lg-6 py-2 mt-xl-4 mt-lg-4 mt-md-3 mt-2">
              <p className="p-2">
                FreeWater is an innovative advertising platform that utilizes
                free premium spring water as a new type of advertising medium
                while prioritizing philanthropy and sustainability. Ten cents
                from each beverage is donated to charity to{" "}
                <b>fight the global water crisis.</b> We only need 10% of
                Americans to choose FreeWater to solve the global water crisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 end */}

      {/* section 4 start */}

      <section className=" container-fluid d-flex gap-4 sectionFour">
        <div className="container ">
          <div className="row  align-items-center justify-content-between my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3 ">
            <div className="col-md-5 col-lg-5 py-2  sectionFourColOne">
              <h1 className="fw-bold">We are partnered with WellAware</h1>
              <p className="py-2">
                We donate fifty paisa per beverage to WellAware, an Indian based
                non-profit that builds water wells in Rajasthan. Every 150
                FreeWater donates enough money to provide one person with a safe
                water source for the rest of their life.
              </p>

              <button className="btn btn-outline-dark custom-hover fw-bold">
                Learn More
              </button>
            </div>

            <div className="col-md-4 col-lg-6 py-2 sectionFourColTwo">
              <img
                className=" object-fit-cover"
                src="https://static.wixstatic.com/media/bfcb9b_3c6cf264b29e49838779345fd1a18d20~mv2.webp/v1/fill/w_649,h_488,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/free-water-drinking-image-1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 4 end */}

      {/* section 5 start */}

      {/* <section className='my-lg-5  d-flex justify-content-center'>

                <div className='row col-12 col-lg-7 align-items-center my-lg-5'>

                    <div className='col-12 col-lg-7 py-2'>
                        <img className='w-100 object-fit-cover' src="https://static.wixstatic.com/media/bfcb9b_54b4f8a74eee4e4295f957edee9217bd~mv2.webp/v1/fill/w_621,h_455,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/three-bottles-free-water.webp" alt="" />
                    </div>

                    <div className='col-12 col-lg-5 py-2'>
                        <h1 className='fw-bold'>We never use plastic bottles</h1>
                        <p className='py-4'>FreeWater comes in aluminum bottles and paper cartons of natural spring water because we didn't want to make water free and do it in a plastic bottle.</p>
                    </div>

                </div>

            </section> */}

      {/* section 5 end */}

      {/* section 6 start */}

      <div className="d-flex justify-content-center align-items-center my-3 getHomeModel">
        <button
          type="button"
          className="btn btn-info "
          data-bs-toggle="modal"
          data-bs-target="#subscribeModal"
        >
          Subscribe to Get FreeWater
        </button>

        <div
          className="modal fade  "
          id="subscribeModal"
          tabIndex={-1}
          aria-labelledby="subscribeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header  homeModelBg  model-sm model-md model-lg">
                <h5 className="modal-title text-dark " id="subscribeModalLabel">
                  Subscribe To Get Your FreeWater
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body my-2 my-xl-3 my-lg-3 my-md-4 my-sm-3">
                <form className="row g-3 px-2 px-sm-3 px-md-3 px-lg-5 ">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      id="first
                      Name"
                      placeHolder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email
                      "
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Enter Your City"
                      className="form-control"
                      id="city"
                      required
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-info w-50">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 end */}
    </div>
  );
}

export default Home;
