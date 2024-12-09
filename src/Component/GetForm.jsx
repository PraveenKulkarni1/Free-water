import React from "react";
import "./getForm.css";
const GetForm = () => {
  return (
    <div className="container getFormBg">
      <div className="row my-0 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
        <div className="col-md-6 p-0 mt-2 mb-0  mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 bigBootle ">
          <img src="./ff2.png" className="getImgOne" />
        </div>

        <div className="col-md-6 my-2  my-xl-5 my-lg-5 my-md-3 my-sm-2 px-3 px-lg-5 px-xl-5 px-md-4 px-sm-3 ">
          <h1 className="getHead ">Get in touch with us</h1>
          <p className="getPara">
            Hi, I’m Amanda. Need help? Use the form below or email me at
            hello@xyz.com
          </p>
          <form className="row row-gap-1 getForm  d-flex justify-content-center align-items-center flex-column">
            <div>
              <label
                className="form-check-label formLabel"
                for="flexCheckDefault"
              >
                Name
              </label>
              <input
                className="form-control px-1 p-xl-3 p-lg-3 px-md-2 px-sm-2 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your First name"
              />
            </div>

            <div>
              <label
                className="form-check-label formLabel"
                for="flexCheckDefault"
              >
                Email
              </label>
              <input
                className="form-control p-0 p-xl-3 p-lg-3 p-md-2 p-sm-2 rounded-5 border-0 "
                type="text"
                placeHolder="Enter Your Email"
              />
            </div>

            <div>
              <label for="" className="">
                Message
              </label>
              <br />
              <textarea
                className="form-control p-0 p-xl-3 p-lg-3 p-md-2 p-sm-1 rounded-5 border-0 "
                id="exampleFormControlTextarea1"
                placeholder="Type your query here....."
                rows="2"
              ></textarea>
            </div>

            <div className="mb-2 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2 getBtnMain ">
              <button className="getBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetForm;
