import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

function FAQ() {
  return (
    <div className="container-fluid faqContainer">
      <div className="row d-flex justify-content-center p-1 p-xl-4 p-lg-4 p-md-3 "></div>
      <div className="col-12 text-center faqHead">
        <h1>FAQ</h1>
      </div>
      <div className="row container-fluid justify-content-center">
        <div className="col-12 col-lg-8">
          <h3 className="text-center py-3 faqContent">General</h3>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How is FreeWater free?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample1">
              <div className="">
                FreeWater is paid for by ads that are printed directly onto
                aluminum bottles and paper cartons. Ten cents per beverage is
                donated to charity to fight the global water crisis.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>Will you ship FreeWater to me?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample2">
              <div className="">
                We are working around the clock to launch our free 12 pack
                program. Just pay for the shipping and the water is free and
                each water donates to charity too.
              </div>
            </div>
          </div>

          {/* <div className='border-bottom border-info py-3'>

                        <div className='d-flex justify-content-between align-items-center' data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">

                            <h5>Why aluminum bottles and paper cartons?</h5>
                            <h3>+</h3>

                        </div>
                        <div className="collapse" id="collapseExample3">
                            <div className="">
                                Looking carefully at the pros and cons of both aluminum bottles and paper cartons, we know neither is perfect – but both are far more sustainable than plastic bottles. Our long term goal is to distribute all our beverages in glass bottles 100% hemp cartons.
                            </div>
                        </div>
                    </div> */}

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>Why BPA free?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample4">
              <div className="">
                The majority of bottled water is contaminated with the chemical
                BPA. High levels of BPA have been linked to diseases such as
                hormonal disruption, diabetes, high blood pressure, infertility,
                breast cancer, and hazardous effects on the brain and behavior
                of infants and young children.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How do I invest?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample5">
              <div className="">
                Please visit and fill out the form making sure to type a
                "investor" as a subject line.
                <p>
                  {" "}
                  <a href="" className="text-info">
                    https://freewater.io/contact-us
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How can I help FreeWater?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample6">
              <div className="">
                Please help us to spread the word by sharing our project on
                social media and with your friends and family.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How can I help FreeWater?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample6">
              <div className="">
                Please help us to spread the word by sharing our project on
                social media and with your friends and family.
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="col-12 col-lg-8 my-5">
          <h3 className="text-center py-3 faqContent">Distribution</h3>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How do I distribute FreeWater?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample7">
              <div className="">
                We are currently looking to partner with distribution points in
                the lower 28 states. In most cases, our ideal distribution
                partnerships are with retail stores and outlets. However, we may
                be willing to partner with the right individuals to distribute
                FreeWater in their town. Please fill out the{" "}
                <Link to={"/Distribute"} className="text-info">
                  contact form on our distribution page{" "}
                </Link>
                / leave a detailed message and someone from our team will get
                back to you ASAP.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample8"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>What are the minimum requirements to be a distributor?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample8">
              <div className="">
                <p>
                  Retail outlets need to commit to distributing a minimum of one
                  pallet of FreeWater per month.
                </p>
                <p>
                  The location needs to be enticing enough to line up
                  advertisers to cover the cost of the product/distribution.
                </p>
                <p>
                  Each location will need to advertise that they are a FreeWater
                  distributor by posting a sign on their window and on their
                  website if applies. We will also market your location for you.
                </p>
                <p>
                  Individuals who wish to “officially” distribute FreeWater must
                  be hand selected by our team to ensure that they are a good
                  fit.
                </p>
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample9"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>Do distributers have to advertise?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample9">
              <div className="">
                No, but that is the fastest way to get started.
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="col-12 col-lg-8 my-5">
          <h3 className="text-center py-3 faqContent">Advertising</h3>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample10"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How much does it cost to advertise?</h5>
              <h3>+</h3>
            </div>

            <div className="collapse" id="collapseExample10">
              <div className="">
                <p>It depends on several factors:</p>
                {/* <p>1. Aluminum bottles or paper cartons?</p> */}
                <p>1. The number of units?</p>
                <p>
                  2. Are we distributing the water or are you distributing the
                  water?
                </p>
                <p>3. The location of distribution?</p>
                <p>
                  4. Do you have a graphic designer on staff or do you need us
                  to design it for you?
                </p>
                <p>5. Are you splitting the ad space with someone else?</p>
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample11"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How long does it take to place an advertising order?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample11">
              <div className="">
                {/* <p>Aluminum Bottles</p> */}
                <p>
                  Roughly six weeks from design approval and payment. However,
                  you should always place your order as far in advance as
                  possible if you have a time sensitive project.
                </p>
                {/* <p>Paper cartons</p>
                                <p>The current lead time for paper cartons is 4 months. </p> */}
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample12"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How does FreeWater compare to other advertising mediums?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample12">
              <div className="">
                FreeWater is the best brand loyalty platform on Earth and there
                are unique opportunities to incorporate this new and exciting
                medium into most ad budgets.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample13"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How do I advertise?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample13">
              <div className="">
                <p>To advertise, please visit https://freewater.io</p>
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample14"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How do I advertise with FreeWater?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample14">
              <div className="">
                <p>
                  To advertise with FreeWater, please visit
                  https://freewater.io/advertise
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="col-12 col-lg-8 my-5">
          <h3 className="text-center py-3 faqContent">Other</h3>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample15"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>Can I use FreeWater as a fundraising tool?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample15">
              <div className="">
                FreWe will create special partnerships for 501(c)(3)
                organizations or any other positive community outlets such as
                church groups, sports programs, and schools. Partners who are
                using FreeWater as a fundraiser must be able to sell all the ad
                space themselves and we will contribute between ten and twenty
                five cents per beverage to the partner depending on the quantity
                and the price at which the product is sold.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample16"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>Will you offer other free products in the future?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample16">
              <div className="">
                Yes, we are launching a free supermarket / Amazon 2.0, and
                FreeWater is simply our first product. We have created a handful
                of processes that will enable the free and profitable
                distribution of nearly every type of product that can be
                purchased in COSTCO today. This includes food, beverages,
                clothing, medicine, computers, transportation, and travel. Each
                category of product will donate a percentage of its revenue to a
                different charitable cause.
              </div>
            </div>
          </div>

          <div className="border-bottom border-info py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              href="#collapseExample17"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h5>How do I invest?</h5>
              <h3>+</h3>
            </div>
            <div className="collapse" id="collapseExample17">
              <div className="">
                Please visit and fill out the form making sure to type
                a"investor" as a subject line. https://freewater.io/contact-us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
