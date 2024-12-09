import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navi = useNavigate();
  const HomeReload = () => {
    navi("/");
    window.location.reload();
  };
  const ContactUsReload = () => {
    navi("/ContactUs");
    window.location.reload();
  };
  const navigateToPage = (path) => {
    navi(path);
    window.scrollTo(0, 0); // Scrolls the page to the top
  };
  return (
    <>
      <div className=" container-fulid footerBg">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 ">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link " : "nav-link"
                  }
                >
                  {" "}
                  <img src="./assets/freeLogo.png" className="fLogoImg" />
                </NavLink>
              </div>
              <div className="d-flex gap-3 my-3 my-xl-4 my-lg-5 my-md-3 my-sm-3 FIconMain">
                <a
                  href="https://www.facebook.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light "
                >
                  <FaFacebook className="iconSize" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaInstagram className="iconSize" />
                </a>
                <a
                  href="https://x.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <FaTwitter className="iconSize" />
                </a>
              </div>
            </div>
            <div className="col-md-9 my-0 my-xl-5 my-lg-5 my-md-3 my-sm-0  ">
              <ul className="footerNav d-flex justify-content-end gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-1 p-0 ">
                <li>
                  <Link to="/" onClick={() => navigateToPage("/")}>
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/contactUs"
                    onClick={() => navigateToPage("/ContactUs")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/blog-one"
                    onClick={() => navigateToPage("/blog-one")}
                  >
                    Blog 1
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/blog-two"
                    onClick={() => navigateToPage("/blog-two")}
                  >
                    Blog 2
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link
                    to="/blog-three"
                    onClick={() => navigateToPage("/blog-threes")}
                  >
                    Blog 3
                  </Link>
                </li>
              </ul>
              <ul className="footerNav d-flex justify-content-end gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-1 p-0 my-0 my-xl-5 my-lg-5 my-md-3 my-sm-0 ">
                <li>
                  <Link to="/FAQ" onClick={() => navigateToPage("/FAQ")}>
                    FAQ's
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/inquiry"
                    onClick={() => navigateToPage("/inquiry")}
                  >
                    Inquery
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/Advertise"
                    onClick={() => navigateToPage("/Advertise")}
                  >
                    Advertise
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/terms-condition"
                    onClick={() => navigateToPage("/terms-condition")}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footerSecBg">
        <div className="container"></div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-end p-0  ">
            <div className="footerSecPara">
              Copyright © 2024 It’sfreewater. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
