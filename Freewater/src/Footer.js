import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
  const navi = useNavigate();
  const HomeReload = () => {
    navi("/");
    window.location.reload();
  };
  const ContactUsReload = () => {
    navi("/ContactUs");
    window.location.reload();
  };

  return (
    <div>
      {/* footer start */}
      <footer className="container-fluid footerBg text-white">
        <div className="container  py-0 py-lg-4 py-md-3 py-sm-0">
          <div className="row d-flex justify-content-around">
            {/* Column 1 */}
            <div className="col-md-5 mb-3 my-2">
              <ul>
                <li className="nav-item">
                  <a onClick={HomeReload} className="" href="#">
                    <img src="./logo.jpg" alt="" width={"70px"} />
                  </a>
                </li>
              </ul>
              <h3 className="py-0 py-lg-4 py-md-3 py-sm-0 fHeadOne">
                Because water should be free
              </h3>
              <p className="fParaOne">
                Help us spread the word and share our movement with your friends
                and family
              </p>
              <button onClick={ContactUsReload} className="btn btn-info btn-sm">
                Contact Us →
              </button>
            </div>

            {/* Column 2 */}
            <div className="col-md-2 mb-1 mb-xl-4 mb-lg-4 mb-md-3 mb-sm-2 footerCol2">
              <h6 className="footCon">Contact</h6>
              <p className="mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                <a
                  href="tel:7899053007"
                  className="text-light text-decoration-none "
                >
                  7899053007
                </a>
              </p>
              <h6 className="footCon mt-4">Projects</h6>
              <p>
                <Link
                  to={"/Advertise"}
                  className="text-light text-decoration-none"
                >
                  Order FreeWater Bottles
                </Link>
              </p>
              <p>
                <Link
                  to={"/ShopApparel"}
                  className="text-light text-decoration-none"
                >
                  Shop Apparel
                </Link>
              </p>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 mb-0 mb-xl-4 mb-lg-4 mb-md-3 mb-sm-0 footerCol2 ">
              <h6 className="footCon mb-0 mb-xl-4 mb-lg-4 mb-md-3 mb-sm-0 ">
                Follow Us
              </h6>

              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-1 fa-lg-2x fa-1x">
                <a
                  href="https://www.tiktok.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light "
                >
                  <i className="fab fa-tiktok "></i>
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://x.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-1 fa-lg-2x fa-1xmb-2">
                <a
                  href="https://www.youtube.com/account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://discord.com/invite/rfAUWdUWrU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-discord"></i>
                </a>
                <a
                  href="https://business.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.linkedin.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="fParaOne text-center py-xl-5 py-5 py-lg-5 py-md-3 py-sm-1">
          © 2024 Copyright FreeWater All Rights Reserved
        </p>
      </footer>
      {/* footer end */}
    </div>
  );
}

export default Footer;
