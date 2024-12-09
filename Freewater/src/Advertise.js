import React from "react";
import { Link } from "react-router-dom";
import "./advertise.css";

function Advertise() {
  return (
    <div className=" container-fluid">
      <div className="d-flex justify-content-center p-1 p-xl-4 p-lg-4 p-md-3"></div>
      <div className="col-12 text-center advertiseRTwo">
        {" "}
        <h1> Advertise</h1>
      </div>
      <section className="container-fluid d-flex  justify-content-center my-1 my-xl-5 my-lg-3 my-md-3 my-sm-3 advQuota">
        <div className="d-flex flex-wrap col-12 col-lg-12 align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 advBottel">
            <img className="" src="./home1.jpg" alt="" />
          </div>

          <div className=" col-lg-4 col-md-4 text-center text-lg-start advPut">
            <h1 className="fw-bold text-black fs-2 advh1">
              PUT YOUR BRAND IN EVERYONE’S HAND™
            </h1>
            <p className="my-2 my-lg-5 my-md-3 my-sm-3 my-xl-5  advParaOne">
              Receive meaningful impressions and utilize the greatest brand
              loyalty platform in the ad industry
            </p>
            <a href="#Get1Jump" className="">
              <button className="btn btn-dark  btn-md  text-light  ">
                Get A Quote
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="container-fluid d-flex  justify-content-center  sectionThreeCanvas">
        <div className=" row d-flex flex-wrap col-12 col-lg-11 align-items-center justify-content-center my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
          <div className="col-12 col-lg-10">
            <h1 className="fw-bold text-black">
              Our product is a blank canvas
            </h1>
            <p className="my-2 my-xl-4 my-lg-4 my-md-3  text-black">
              FreeWater is the opposite of traditional advertising because we
              are not annoying. Instead of making the audience cringe or run for
              cover, we put a smile on their face, and from that state of
              happiness is when they'll be excited to support your brand.
            </p>

            <div className="d-flex flex-wrap justify-content-center  my-2 my-lg-5 my-md-3 my-xl-5 ">
              <div className="py-2 col-12 col-lg-6">
                <div className="">
                  <h6 className="fw-bold">Use QR Codes</h6>
                  <p>
                    to connect anything on the internet, such as websites,
                    coupons, and videos
                  </p>
                </div>
              </div>

              <div className="py-2 col-12 col-lg-6">
                <div className="">
                  <h6 className="fw-bold">Sell or Freely Distribute</h6>
                  <p>ad supported FreeWater in 500ML / 1L bottles</p>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div>
                  <h6 className="fw-bold">Choose a Distribution Model</h6>
                  <p>
                    if you want us to distribute it in India or ship it anywhere
                    in the lower 28 states
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div>
                  <h6 className="fw-bold">
                    Subsidize or Cover the Entire Cost by Sharing the Ad Space
                  </h6>
                  <p>with non-competing brands</p>
                </div>
              </div>
            </div>
            <div className="text-center my-2 my-lg-5 my-md-3 my-xl-5">
              <a href="#Get1Jump">
                <button className="btn btn-dark btn-md  text-light">
                  Get A Quote
                </button>
              </a>
            </div>
          </div>

          <div className="col-12  advertise2Img">
            <img className="w-100" src="./advertise2.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="">
        <div className="d-flex justify-content-center bg-black py-5 Poligon1Advertise">
          <div className="col-8 py-5">
            <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center text-center text-light">
              <div className="col-12 col-lg">
                <img
                  className="img-fluid w-50"
                  src="https://static.wixstatic.com/media/bfcb9b_4700e2f59a614c0dabd343af94cd9952~mv2.webp"
                  alt=""
                />
                <h1 className="my-4">10x</h1>
                <p className=" text-info">more impressions than direct mail</p>
              </div>

              <div className="col-12 col-lg">
                <img
                  className="img-fluid w-50"
                  src="https://static.wixstatic.com/media/bfcb9b_45630e9492e0437babc8c0283afa0289~mv2.webp"
                  alt=""
                />
                <h1 className="my-4">$2.50</h1>
                <p className=" text-info">
                  cheaper per ten impressions than direct mail
                </p>
              </div>

              <div className="col-12 col-lg">
                <img
                  className="img-fluid w-50"
                  src="https://static.wixstatic.com/media/bfcb9b_38d5cbebb5204762946d62ecfa8601f3~mv2.webp"
                  alt=""
                />
                <h1 className="my-4">29%</h1>
                <p className=" text-info">return on investment</p>
              </div>

              <div className="col-12 col-lg">
                <img
                  className="img-fluid w-50"
                  src="https://static.wixstatic.com/media/bfcb9b_aa2a99c0b5494c6b8dde30f5fc655b02~mv2.webp"
                  alt=""
                />
                <h1 className="my-4">Priceless</h1>
                <p className=" text-info">
                  saving lives and helping the planet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex justify-content-lg-end">
          <div className="col-12 col-lg-10 d-flex flex-wrap">
            <div className="col-12 col-lg-7 py-5 billboard01">
              <h1 className="fw-bold text-black py-5 text-center">
                It's a mini billboard in your hands
              </h1>
            </div>

            <div className="bg-info col-12 col-lg-5">
              {/* You can add content here for the info section */}
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid productListBg">
        <div className="d-flex justify-content-center text-center  ">
          <div className="col-8 ">
            <div className="d-flex justify-content-center flex-wrap my-2 my-lg-5 my-md-3 my-xl-5">
              <div className="col-12 col-lg-4">
                {/* <video className='w-75 ' loop="loop" muted="muted" autoPlay="autoPlay ">
                                    <source src="https://video.wixstatic.com/video/bfcb9b_0c2c123e5714497daf09a2b37a0e12d9/1080p/mp4/file.mp4" type="" />
                                </video> */}

                <img className="img-fluid w-50" src="./advertise3.jpg" alt="" />

                <div className="my-2">
                  {/* <h2>Paper Carton</h2> */}
                  <p>500ml</p>
                  <a href="#Get1Jump" className="advQuota">
                    <button className="btn btn-outline-dark btn-md">
                      Get A Quote
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                {/* <video className='w-75' loop="loop" muted="muted" autoPlay="autoPlay ">
                                    <source src="https://video.wixstatic.com/video/bfcb9b_60be8b0cd37243fb83343b19c5b8091e/1080p/mp4/file.mp4" type="" />
                                </video> */}
                <img className="img-fluid w-50" src="./advertise4.jpg" alt="" />

                <div className="my-2 ">
                  {/* <h2>Alumi-Tec Bottle</h2> */}
                  <p>500ml</p>
                  <a href="#Get1Jump" className="advQuota">
                    <button className="btn btn-outline-dark btn-md">
                      Get A Quote
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                {/* <video className='w-75' loop="loop" muted="muted" autoPlay="autoPlay ">
    <source src="https://video.wixstatic.com/video/bfcb9b_60be8b0cd37243fb83343b19c5b8091e/1080p/mp4/file.mp4" type="" />
</video> */}
                <img className="img-fluid w-50" src="./home2.jpg" alt="" />

                <div className="my-2 ">
                  {/* <h2>Alumi-Tec Bottle</h2> */}
                  <p>500ml</p>
                  <a href="#Get1Jump" className="advQuota">
                    <button className="btn btn-outline-dark btn-md">
                      Get A Quote
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4 my-2 my-lg-5 my-md-3 my-sm-3 my-xl-5 ">
                {/* <video className='w-75' loop="loop" muted="muted" autoPlay="autoPlay ">
    <source src="https://video.wixstatic.com/video/bfcb9b_60be8b0cd37243fb83343b19c5b8091e/1080p/mp4/file.mp4" type="" />
</video> */}
                <img className="img-fluid w-75" src="./ff.png" alt="" />

                <div className="my-2 ">
                  {/* <h2>Alumi-Tec Bottle</h2> */}
                  <p>500ml</p>
                  <a href="#Get1Jump" className="advQuota">
                    <button className="btn btn-outline-dark btn-md">
                      Get A Quote
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4 my-2 my-lg-5 my-md-3 my-sm-3 my-xl-5 ">
                {/* <video className='w-75' loop="loop" muted="muted" autoPlay="autoPlay ">
<source src="https://video.wixstatic.com/video/bfcb9b_60be8b0cd37243fb83343b19c5b8091e/1080p/mp4/file.mp4" type="" />
</video> */}
                <img className="img-fluid w-75" src="./ff2.png" alt="" />

                <div className="my-2 ">
                  {/* <h2>Alumi-Tec Bottle</h2> */}
                  <p>500ml</p>
                  <a href="#Get1Jump" className="advQuota">
                    <button className="btn btn-outline-dark btn-md">
                      Get A Quote
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex justify-content-center my-lg-3 py-lg-3 advFour">
          <div className="col-12 ">
            <h2 className="text-center  ">
              Discover the success stories of our satisfied clients.
            </h2>

            <img className="img-fluid" src="./advertise5.jpg" alt="" />

            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://static.wixstatic.com/media/bfcb9b_762924ac61da4524b10104061c92ebcb~mv2.png/v1/fill/w_1225,h_510,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bfcb9b_762924ac61da4524b10104061c92ebcb~mv2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://static.wixstatic.com/media/bfcb9b_c0befc8a059b412ea70c776712737b2a~mv2.png/v1/fill/w_1225,h_510,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bfcb9b_c0befc8a059b412ea70c776712737b2a~mv2.png" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="https://static.wixstatic.com/media/bfcb9b_0b81b373a8fa4365965a44453ba95c69~mv2.png/v1/fill/w_1225,h_510,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bfcb9b_0b81b373a8fa4365965a44453ba95c69~mv2.png" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="https://static.wixstatic.com/media/bfcb9b_818115bfea52429380a278e184cb18f5~mv2.png/v1/fill/w_1225,h_510,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bfcb9b_818115bfea52429380a278e184cb18f5~mv2.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>

      <section id="Get1Jump">
        <div className="d-flex justify-content-center align-items-center my-3 getModel">
          <button
            type="button"
            className=""
            data-bs-toggle="modal"
            data-bs-target="#quoteModal"
          >
            Get a Quote
          </button>
        </div>

        <div
          className="modal fade"
          id="quoteModal"
          tabIndex="-1"
          aria-labelledby="quoteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content" style={{ color: "white" }}>
              <div className="modal-header modelHeader">
                <h2 className="modal-title modelTitle" id="quoteModalLabel">
                  Get a Quote
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body modelBody">
                <form className="row row-gap-3 px-2 px-sm-3 px-md-3 px-lg-5">
                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="text"
                      id="name"
                      placeholder="Enter First and last name"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1  fs-5 rounded-1 border-0"
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="text"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="text"
                      id="company"
                      placeholder="Enter Company Name"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="text"
                      id="businessType"
                      placeholder="Type of business"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="text"
                      id="advertise"
                      placeholder="What do you want to advertise?"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      type="number"
                      id="budget"
                      placeholder="What is your budget?"
                    />
                  </div>

                  <div>
                    <textarea
                      className="form-control p-0 p-sm-1 p-md-1 p-lg-1 fs-5 rounded-1 border-0"
                      id="message"
                      placeholder="Write Message"
                      rows="2"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-info text-dark fs-4 mt-3"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advertise;
