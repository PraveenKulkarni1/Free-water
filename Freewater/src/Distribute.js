import React from "react";
import { Link } from "react-router-dom";
import "./distribute.css";

function Distribute() {
  return (
    <div>
      <section className="conatiner ">
        <div className="Distributediv1 d-flex justify-content-center align-items-center ">
          <div className="col-12 col-lg-9 text-light text-center text-lg-start my-0 my-lg-5 my-md-2 my-sm-1 my-xl-5  ">
            <h1 className="display-1 fw-bold col-8 col-lg-8 my-2 my-xl-5 my-lg-5 my-md-5 my-sm-5 disMargin  ">
              Distribute FreeWater
            </h1>
            <p className=" fs-2 col-6 col-lg-4 disMarginPara">
              Whether it's an event or for your business, we have many different
              options for you!
            </p>
          </div>
        </div>
      </section>

      <section className=" col-12   disSecOneImg ">
        <img className="w-100" src="./dis1.jpg" alt="" />
      </section>

      <section className="container-fluid  d-flex justify-content-center py-lg-5 my-2">
        <div className="col-10 col-md-8 col-sm-8 col-lg-6 border distributeBg distributeForm">
          <h2 className=" text-center desHeading">Distribute FreeWater</h2>

          <form className="row row-gap-3  desForm  my-0 my-xl-5 my-lg-5 my-md-4 my-sm-3 px-3 px-lg-5 px-xl-5 px-md-4 px-sm-3 ">
            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-2 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your First name"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your Last name"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your Email"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your  Phone number"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your  Company name"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your Type of business"
              />
            </div>

            <div className="d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                placeHolder="Enter Your "
              />
              <label
                className="form-check-label formLabel"
                for="flexCheckDefault"
              >
                Is items for an event?
              </label>
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder=" Distribution point address "
              />
            </div>

            <div>
              <label for="" className="">
                Shipping address if it is different than the distribution
                point:*
              </label>
              <br />
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="text"
                placeHolder=" "
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="number"
                placeHolder="Daily foot traffic"
              />
            </div>

            <div>
              <input
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                type="number"
                placeHolder=" Age range "
              />
            </div>

            <div>
              <label for="" className="">
                How many beverages do you want to distribute monthly?:*
              </label>
              <br />
              <textarea
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>

            <div>
              <label for="" className="">
                Do you have an elevated loading dock to receive a shipment?:*
              </label>
              <br />

              <div className="d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  placeHolder="Enter Your "
                />
                <label className="form-check-label " for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  placeHolder="Enter Your "
                />
                <label className="form-check-label " for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>

            <div>
              <label for="" className="">
                Why do you want to distribute FreeWater?:*
              </label>
              <br />
              <textarea
                className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 rounded-5 border-0 "
                id="exampleFormControlTextarea1"
                rows="2"
                placeHolder=" "
              ></textarea>
            </div>

            <div className="d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                placeHolder=" "
              />
              <label className="form-check-label " for="flexCheckDefault">
                I agree to share this information with potential advertisers?
              </label>
            </div>

            <div className="text-center mb-2 desBtn">
              <button className="btn btn-primary texr-white fs-bold ">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Distribute;
