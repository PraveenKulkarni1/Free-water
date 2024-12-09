import React from "react";

import "./contact.css";

function ContactUs() {
  return (
    <div>
      <div
        id="ravi"
        className="container-fluid d-flex  justify-content-center contactMain"
      >
        <div className="col-12 col-lg-9 ">
          <div className="my-2 my-lg-5 my-md-3 my-sm-3 my-xl-5 text-center contactHead">
            <h1> Media</h1>
          </div>

          <div className="d-flex flex-wrap contactRow my-2 my-lg-5 my-xl-5 my-md-3 my-sm-3">
            <div className="col-10 col-lg-7 col-md-6   border contactForm  contactHeadTwo">
              <h2 className="text-center text-dark">Contacts</h2>

              <form className="row row-gap-3 desForm px-3 px-xl-5 px-lg-5 px-md-3 px-sm-3 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
                <div>
                  <input
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    type="text"
                    placeHolder="Enter Your First name"
                  />
                </div>

                <div>
                  <input
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    type="text"
                    placeHolder="Enter Your Last name"
                  />
                </div>

                <div>
                  <input
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    type="text"
                    placeHolder="Enter Your Email"
                  />
                </div>

                <div>
                  <input
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    type="text"
                    placeHolder="Enter Your  Phone number"
                  />
                </div>

                <div>
                  <input
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    type="text"
                    placeHolder="Enter Your Subject"
                  />
                </div>

                <div>
                  <textarea
                    className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>

                <div className="text-center contactBtn  mb-xl-4 mb-lg-4 mb-md-3 mb-sm-3 mb-2 ">
                  <button className="btn btn-info fs-bold text-black">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6 col-lg-5 col-6  col-lg text-center contactImg my-xl-2 my-lg-4 my-md-0 my-sm-0 my-0">
              <img className=" " src="./ff2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
