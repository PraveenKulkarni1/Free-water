import React from "react";
import "./revolutionAds.css";
import UseMediaQuery from "./useMediaQuery";

const RevolutionAds = () => {
  const isMobile = UseMediaQuery("(max-width:768px)");
  return (
    <div className="container-fluid RevolutionBg">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 revColOne   my-2
     my-xl-5 my-lg-5 my-md-3 my-sm-3 "
          >
            <div className=" ">
              <h1 className="revHead">
                Revolutionize Advertising Your Brand, Our Canvas
              </h1>
              <p className="revPara">
                We turned our bottles into canvases for a brand's message and
                offer everything for free to consumers. A simple scan of our QR
                code connects them to your brand's world, allowing you to reach
                your target audience directly and track real-time campaign
                performance.
              </p>
            </div>

            <div className="col-12 getAppMain">
              <p className="revImgPara my-1 my-xl-4 my-lg-4 my-md-2 my-sm-2">
                Get the App
              </p>

              <div className="  d-flex  gap-4  applogoMain my-1 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                <div className="appLogoBg d-flex g-0 col-12 ">
                  <div className="col-4">
                    <img src="./assets/gpay4.webp" className="apLogo" />
                  </div>
                  <div className="col-8 mt-2 ">
                    <p className="getP p-0 m-0">GET IT ON</p>
                    <h3 className="getH p-0">GooglePlay</h3>
                  </div>
                </div>
                <div className="appLogoBg d-flex g-0 col-12 ">
                  <div className="col-4">
                    <img src="./assets/AppleLogo.png" className="apLogo" />
                  </div>
                  <div className="col-8 mt-2">
                    <p className="getP p-0 m-0">Download On the</p>
                    <h3 className="getH p-0">AppStore</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isMobile ? (
            <>
              <div className="col-md-6 revImages d-flex justify-content-around align-items-center my-2 my-sm-3">
                <img src="./assets/adBottle2.png" className="revImgOne" />
                <img src="./assets/Rev22.png" className="revImgTwo" />
                <img src="./assets/Rev33.png" className="revImgThree" />
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="col-md-6 revMobImages">
                <img src="./assets/adBottle2.png" className="revImgMobOne" />
                <img src="./assets/Rev2.png" className="revImgMobTwo" />
                <img src="./assets/Rev33.png" className="revImgMobThree" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevolutionAds;
