import React from "react";
import "./followInsta.css";

const FollowInsta = () => {
  return (
    <>
      <div className="container-fluid  my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2">
        <div className="row  ">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-2 my-2 my-xl-5 my-lg-5 mb-md-3 mb-sm-2">
            <h1 className="followHead">Follow Us On Instagram</h1>
            <p className="followPara ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin{" "}
            </p>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col-md-12 p-0  my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2">
            <img src="./assets/inst3.png" className="inst1 p-0" />
            <img src="./assets/inst2.png" className="inst2 p-0" />
            <img src="./assets/inst3.png" className="inst1 p-0" />
            <img src="./assets/inst1.png" className="inst3" />
            <img src="./assets/inst3.png" className="inst1" />
            <img src="./assets/inst2.png" className="inst2" />
            <img src="./assets/inst3.png" className="inst1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowInsta;
