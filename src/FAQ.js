import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import "./faq.css";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";

const FAQ = () => {
  const navigate = useNavigate();
  const [activeIndexFirst, setActiveIndexFirst] = useState(null);
  const [activeIndexSecond, setActiveIndexSecond] = useState(null);

  const handleToggleFirst = (index) => {
    setActiveIndexFirst(activeIndexFirst === index ? null : index);
  };

  const handleToggleSecond = (index) => {
    setActiveIndexSecond(activeIndexSecond === index ? null : index);
  };

  const faqItems = [
    {
      question: "How is FreeWater free?",
      answer:
        "FreeWater is paid for by ads that are printed directly onto aluminum bottles and paper cartons. Ten cents per beverage is donated to charity to fight the global water crisis.",
    },
    {
      question: "Will you ship FreeWater to me?",
      answer:
        "We are working around the clock to launch our free 12 pack program. Just pay for the shipping and the water is free, and each water donates to charity too.",
    },
    {
      question: "Why BPA free?",
      answer:
        "The majority of bottled water is contaminated with the chemical BPA. High levels of BPA have been linked to diseases such as hormonal disruption, diabetes, high blood pressure, infertility, breast cancer, and hazardous effects on the brain and behavior of infants and young children.",
    },
    {
      question: "How do I invest?",
      answer:
        "Please visit and fill out the form making sure to type 'investor' as a subject line. Visit: https://freewater.io/contact-us",
    },
    {
      question: "How can I help FreeWater?",
      answer:
        "Please help us to spread the word by sharing our project on social media and with your friends and family.",
    },
    {
      question: "How do I distribute FreeWater?",
      answer:
        "We are currently looking to partner with distribution points in the lower 28 states. Our ideal distribution partnerships are with retail stores and outlets. However, we may partner with the right individuals to distribute FreeWater in their town. Please fill out the contact form on our distribution page, and someone from our team will get back to you ASAP.",
    },
    {
      question: "What are the minimum requirements to be a distributor?",
      answer:
        "Retail outlets need to commit to distributing a minimum of one pallet of FreeWater per month. The location needs to be enticing enough to line up advertisers to cover the cost of the product/distribution. Each location will need to advertise that they are a FreeWater distributor by posting a sign on their window and website (if applicable). We will also market your location for you. Individuals must be hand-selected by our team to ensure a good fit.",
    },
    {
      question: "Can I use FreeWater as a fundraising tool?",
      answer:
        "We will create special partnerships for 501(c)(3) organizations or other positive community outlets such as church groups, sports programs, and schools. Partners must sell all the ad space themselves. We will contribute between ten and twenty-five cents per beverage to the partner, depending on the quantity and the price at which the product is sold.",
    },
  ];

  const faqItemSecond = [
    {
      question: "Do distributors have to advertise?",
      answer: "No, but that is the fastest way to get started.",
    },
    {
      question: "How much does it cost to advertise?",
      answer:
        "It depends on several factors: 1. The number of units. 2. Are we distributing the water, or are you distributing the water? 3. The location of distribution. 4. Do you have a graphic designer on staff, or do you need us to design it for you? 5. Are you splitting the ad space with someone else?",
    },
    {
      question: "How long does it take to place an advertising order?",
      answer:
        "Roughly six weeks from design approval and payment. However, you should always place your order as far in advance as possible if you have a time-sensitive project.",
    },
    {
      question: "How does FreeWater compare to other advertising mediums?",
      answer:
        "FreeWater is the best brand loyalty platform on Earth, and there are unique opportunities to incorporate this new and exciting medium into most ad budgets.",
    },
    {
      question: "How do I advertise?",
      answer: "To advertise, please visit https://freewater.io",
    },
    {
      question: "How do I advertise with FreeWater?",
      answer:
        "To advertise with FreeWater, please visit https://freewater.io/advertise",
    },

    {
      question: "Will you offer other free products in the future?",
      answer:
        "Yes, we are launching a free supermarket/Amazon 2.0, and FreeWater is our first product. We have created processes enabling the free and profitable distribution of nearly every product that can be purchased in COSTCO today, including food, beverages, clothing, medicine, computers, transportation, and travel. Each category will donate a percentage of its revenue to a different charitable cause.",
    },
  ];

  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead">FAQ</h1>
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
                  to="/FAQ"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RevolutionAds />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column  my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
            <h1 className="adSecFourh1">This Is What Our Customers Say</h1>
            <p className="adSecFourp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis
            </p>
          </div>
        </div>
        <div className="row container-fluid d-flex justify-content-around">
          <div className="col-md-5">
            {faqItems.map((item, index) => (
              <div key={index} className="border-bottom border-info py-3">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => handleToggleFirst(index)}
                  style={{
                    cursor: "pointer",
                    color: activeIndexFirst === index ? "blue" : "#303A42",
                  }}
                >
                  <h5 className="faqSecMainh1">{item.question}</h5>
                  <h3 className="toggle-icon ">
                    {activeIndexFirst === index ? (
                      <HiOutlineMinusSm className="homeFaqMinu" />
                    ) : (
                      <FiPlus className="homeFaqPlu" />
                    )}
                  </h3>
                </div>
                <div
                  className={`collapse ${
                    activeIndexFirst === index ? "show" : ""
                  }`}
                >
                  <div className="pt-2 faqSecMainh3">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-5">
            {faqItemSecond.map((item, index) => (
              <div key={index} className="border-bottom border-info py-3">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => handleToggleSecond(index)}
                  style={{
                    cursor: "pointer",
                    color: activeIndexSecond === index ? "blue" : "#303A42",
                  }}
                >
                  <h5 className="faqSecMainh1">{item.question}</h5>
                  <h3 className="toggle-icon ">
                    {activeIndexSecond === index ? (
                      <HiOutlineMinusSm className="homeFaqMinu" />
                    ) : (
                      <FiPlus className="homeFaqPlu" />
                    )}
                  </h3>
                </div>
                <div
                  className={`collapse ${
                    activeIndexSecond === index ? "show" : ""
                  }`}
                >
                  <div className="pt-2 faqSecMainh3">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-12 my-2  my-sm-2 my-xl-5 my-lg-5 my-md-3 my-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <button className="adInqBtn" onClick={() => navigate("/inquiry")}>
            Inquiry Now
          </button>
        </div>
      </div>
      <FollowInsta />
      <GetForm />
    </>
  );
};

export default FAQ;
