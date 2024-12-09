import React from "react";
import GetForm from "./Component/GetForm";
import { NavLink } from "react-router-dom";

const InqNow = () => {
  return (
    <div>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2  my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead"> Inquiry Now</h1>
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
                  to="/inquiry"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Inquiry Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GetForm />
    </div>
  );
};

export default InqNow;
