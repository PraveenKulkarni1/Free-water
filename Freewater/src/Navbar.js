import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navi = useNavigate();
  const bar1 = useRef();
  const xmar1 = useRef();

  const HomeReload = () => {
    navi("/");
    window.location.reload();
  };

  const AdvertiseReload = () => {
    navi("/Advertise");
    window.location.reload();
  };

  const DistributeReload = () => {
    navi("/Distribute");
    window.location.reload();
  };

  const HollReload = () => {
    navi("/Holl");
    window.location.reload();
  };

  const FAQReload = () => {
    navi("/FAQ");
    window.location.reload();
  };

  const ContactUsReload = () => {
    navi("/ContactUs");
    window.location.reload();
  };

  useEffect(() => {
    xmar1.current.style.display = "none";
  }, []);

  const bars = () => {
    bar1.current.style.display = "none";
    xmar1.current.style.display = "block";
  };

  const xmarks = () => {
    bar1.current.style.display = "block";
    xmar1.current.style.display = "none";
  };

  window.onscroll = function () {
    bar1.current.style.display = "block";
    xmar1.current.style.display = "none";
  };

  return (
    <div className="position-sticky top-0 start-5 z-3">
      <nav className="navbar navbar-expand-lg pb-0 ">
        <div className="container-fluid navConatiner">
          <a onClick={HomeReload} className="nav-link d-lg-none " href="#">
            <img width={"60px"} src="./logo.jpg" alt="" />
          </a>
          <button
            ref={bar1}
            onClick={bars}
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars-staggered"></i>
          </button>

          <button
            onClick={xmarks}
            ref={xmar1}
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-solid fa-xmark"></i>
          </button>

          <div
            className="collapse navbar-collapse navMain"
            id="navbarSupportedContent"
          >
            <ul>
              <li className="nav-item">
                <a onClick={HomeReload} className="nav-link" href="#">
                  <img
                    className="navImg"
                    src="./logo.jpg"
                    alt=""
                    width={"50px"}
                  />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100   gap-lg-1 gap-md-2 mr-2 d-flex justify-content-end  ">
              <li className="nav-item homeNavOne ">
                <a
                  onClick={HomeReload}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item homeNavTwo">
                <a onClick={AdvertiseReload} className="nav-link" href="#">
                  Advertise
                </a>
              </li>

              <li className="nav-item homeNavThree">
                <a onClick={DistributeReload} className="nav-link" href="#">
                  Distribute
                </a>
              </li>

              {/* <li className="nav-item">
                                <a onClick={HollReload} className="nav-link" href="#">Hall of Fame</a>
                            </li> */}

              <li className="nav-item homeNavFour">
                <a onClick={FAQReload} className="nav-link" href="#">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a
                  onClick={ContactUsReload}
                  className="navFour nav-link"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
