import React from "react";
import "./blogTwo.css";
import { NavLink } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";
import { CiCalendar } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { FaShare } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const BlogTwo = () => {
  const NextArrow = ({ onClick }) => (
    <div className="blog2Arrow blog2Next" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="blog2Arrow blog2Prev" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const blogCard = [
    {
      image: "./assets/b2Con2.png",
      image2: "./assets/b2RPost1.png",
      name: "James",
      title: "House boating on Lake Shasta",
      description:
        "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires. ",
    },
    {
      image: "./assets/b2RPostM2.png",
      image2: "./assets/follow.png",
      name: "Robert",
      title: "How to choose the right laptop for programming",
      description:
        "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    },
    {
      image: "./assets/cardCar.png",
      image2: "./assets/b2Comm3.png",
      name: "Mary",
      title: "Why Buying a New Car Makes More Sense than Buying Used",
      description:
        " Many experts will tell you buying cars used is best for your long-term financial health. Here’s why they’re (mostly) wrong",
    },
    {
      image: "./assets/b2PostM4.png",
      image2: "./assets/b2RPost4.png",
      name: "Jon Kantner",
      title: "Lasagna is but a Pasta Cake",
      description:
        "Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve.  ",
    },
  ];
  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead"> Blog Detail Page</h1>
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

              <li className="nav-item p-0 adsNav2 ">
                <NavLink
                  to="/terms-condition"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Blog Detail
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RevolutionAds />

      <div className="container">
        <div className="row m-0 ">
          <div className="col-md-8">
            <div className="b2Sec1Bg my-3 my-xl-4 my-lg-5 my-md-3 my-sm-3 w-100">
              <h1 className="b2Sec1h1 my-3 my-xl-4 my-lg-5 my-md-3 my-sm-3">
                How to Spend the Perfect Day on Croatia’s ...
              </h1>
              <img src="./assets/b2Container.png" className="b2Sec1Img" />
              <div className="d-flex justify-content-end gap-2  gap-xl-5 gap-lg-5">
                <div className="d-flex gap-2">
                  <p className="b2S1p">
                    {" "}
                    <CiCalendar />
                  </p>
                  <p className="b2S1p">July 14,2022</p>
                </div>
                <div className="d-flex gap-2">
                  <p className="b2S1p">
                    {" "}
                    <FaRegCommentDots />
                  </p>
                  <p className="b2S1p">Comments:35</p>
                </div>
                <div className="d-flex gap-2">
                  <p className="b2S1p">
                    {" "}
                    <FaRegMessage />
                  </p>
                  <p className="b2S1p">Category:Sports</p>
                </div>
              </div>
            </div>
            <div className="b3Sec1Con2">
              <h1 className="b2Sec2h1">
                Don’t wait. The purpose of our lives is to be happy!
              </h1>
              <p className="b2Sec2p1">
                Upon arrival, your senses will be rewarded with the pleasant
                scent of lemongrass oil used to clean the natural wood found
                throughout the room, creating a relaxing atmosphere within the
                space. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my
                whole heart. I am alone, and feel the charm of existence in this
                spot, which was created for the bliss of souls like mine. I am
                so happy, my dear friend, so absorbed in the exquisite.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img src="./assets/b2Con2.png" className="b2Sec2Img" />
              </div>
            </div>
          </div>
          <div className="col-md-4 b2Second">
            <div className="col-md-4  my-3 my-xl-5 my-lg-5 my-md-3 my-sm-3 ">
              <div className="d-flex  gap-2 ">
                <div className="d-flex gap-2 b2Col2Icon">
                  <p className="b2S1p">
                    {" "}
                    <TbLocationShare />
                  </p>
                  <p className="b2S1p">Share</p>
                </div>
                <div className="d-flex gap-2 b2Col2Icon">
                  <p>
                    {" "}
                    <CiBookmark className="b2S1p" />
                  </p>
                  <p className="b2S1p">Marking</p>
                </div>

                <div className="d-flex gap-2 b2Col2Icon">
                  <p>
                    {" "}
                    <FaRegCommentDots className="b2S1p" />
                  </p>
                  <p className="b2S1p">Comments</p>
                </div>
              </div>

              <div className="row b2sec1Col2Card my-3 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                <div className="col-4">
                  <img
                    src="./assets/follow.png"
                    className="b2Col2Img1 my-3 p-2"
                  />
                </div>
                <div className="col-5 my-3 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                  <p className="b2Col2p1">Louis Hoebregts</p>{" "}
                  <button className="b2sec3Btn d-flex">
                    <FaPlus /> Follow
                  </button>
                </div>
                <div className="col-3 my-3 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                  {" "}
                  <p className="b2Col2p2">27 posts</p>
                </div>
              </div>
              <div className=" row b2sec1Col2Card  my-3 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                <div className="d-flex gap-4">
                  {" "}
                  <TbMinusVertical
                    style={{ color: "F81539" }}
                    className="mt-1"
                  />
                  <p>Tags</p>
                </div>
                <div className="d-flex gap-3 b2CommP">
                  <p>Montenegro</p>
                  <p>Visit Croatia</p>
                  <p>Luxury Travel</p> <p>Travel Log</p>
                </div>
                <div className="d-flex gap-4 b2CommP">
                  <p>Paradise Island</p>
                  <p>Travel Info</p>
                </div>
              </div>
              <div className=" row b2sec1Col2Card2  my-3 my-xl-3 my-lg-3 my-md-2 my-sm-2">
                <div className="d-flex gap-4">
                  {" "}
                  <TbMinusVertical
                    style={{ color: "F81539" }}
                    className="mt-1"
                  />
                  <p>Tags</p>
                </div>
                <div className="col-4">
                  <img src="./assets/b2Post1.png" className="b2PostImg" />
                </div>
                <div className="col-8">
                  <h1 className="b2Posth1">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <p className="b2Postp">Subhead</p>
                </div>
                <div className="col-4">
                  <img src="./assets/b2Post2.png" className="b2PostImg" />
                </div>
                <div className="col-8">
                  <h1 className="b2Posth1">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <p className="b2Postp">Subhead</p>
                </div>
                <div className="col-4">
                  <img src="./assets/b2Post3.png" className="b2PostImg" />
                </div>
                <div className="col-8">
                  <h1 className="b2Posth1">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <p className="b2Postp">Subhead</p>
                </div>
                <div className="col-4">
                  <img src="./assets/b2Post4.png" className="b2PostImg" />
                </div>
                <div className="col-8">
                  <h1 className="b2Posth1">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <p className="b2Postp">Subhead</p>
                </div>
                <div className="col-4">
                  <img src="./assets/b2Post7.png" className="b2PostImg" />
                </div>
                <div className="col-8">
                  <h1 className="b2Posth1">
                    How to Spend the Perfect Day on Croatia’s Most Magical
                    Island
                  </h1>
                  <p className="b2Postp">Subhead</p>
                </div>
              </div>
              <div className="adveriseAD">
                <div className="row b2BgPost1 my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="b2Post1h1">Advertising</h1>
                    <p className="b2Post1p">360 px * 180px</p>
                  </div>
                </div>
                <div className="row b2BgPost2 my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h1 className="b2Post1h1">Advertising</h1>
                    <p className="b2Post1p">360 px * 180px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 my-2 my-xl-5 my-lg-5 my-md-3 my-sm-2 ">
              <h1 className="b2Sec2h1 ">
                Not how long, but how well you have lived is the main thing.
              </h1>
              <p className="b2Sec2p1">
                When you are ready to indulge your sense of excitement, check
                out the range of water- sports opportunities at the resort’s
                on-site water-sports center. Want to leave your stress on the
                water? The resort has kayaks, paddleboards, or the low-key pedal
                boats. Snorkeling equipment is available as well, so you can
                experience the ever-changing undersea environment.
              </p>
              <p className="b2Sec2p1">
                Not only do visitors to a bed and breakfast get a unique
                perspective on the place they are visiting, they have options
                for special packages not available in other hotel settings. Bed
                and breakfasts can partner easily with local businesses for a
                smoothly organized and highly personalized vacation experience.
                The Fife and Drum Inn offers options such as the Historic
                Triangle Package that includes three nights at the Inn,
                breakfasts, and admissions to historic Williamsburg, Jamestown,
                and Yorktown. Bed and breakfasts also lend themselves to
                romance.
              </p>
              <p className="b2Sec2p1">
                Part of the charm of a bed and breakfast is the uniqueness; art,
                décor, and food are integrated to create a complete experience.
                For example, the Fife and Drum retains the colonial feel of the
                area in all its guest rooms. Special features include antique
                furnishings, elegant four poster beds in some guest rooms, as
                well folk art and artifacts from the restoration period of the
                historic area available for guests to enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex gap-4   my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
          {" "}
          <TbMinusVertical style={{ color: "F81539" }} className="mt-1" />
          <h1 className="b2Commh1"> Comments</h1>
        </div>
        <div className="row  ">
          <div className="col-12 b2Sec3Col1">
            <div className=" d-flex justify-content-between">
              <div className="col-9 ">
                <div className="row b2sec3Col1Card d-flex gap-4 gap-lg-3 gap-xl-3 gap-md-3 gap-sm-2   p-2 ">
                  <div className="col-1 ">
                    <img
                      src="./assets/b2RPost4.png"
                      className="b2Sec3Img1 my-1 "
                    />
                  </div>
                  <div className="col-6 my-1">
                    <p className="b2Col2p1">Jon Kantner</p>{" "}
                    <div className="d-flex gap-2">
                      <p className="b2S1p">
                        {" "}
                        <CiCalendar />
                      </p>
                      <p className="b2S1p">July 14,2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 mt-2">
                <div className="d-flex gap-2 justify-content-end mt-1 ">
                  <p>
                    {" "}
                    <FaShare />
                  </p>
                  <p>Replay</p>
                </div>
              </div>
            </div>
            <p className="b3s3col1p1">
              When you are ready to indulge your sense of excitement, check out
              the range of water- sports opportunities at the resort’s on-site
              water-sports center. Want to leave your stress on the water? The
              resort has kayaks, paddleboards, or the low-key pedal boats.
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 d-flex justify-content-center align-items-center ">
            <div className="b2One1 ">
              <div className=" d-flex justify-content-between ">
                <div className="col-12   ">
                  <div className="row  d-flex gap-4 gap-lg-3 gap-xl-3 gap-md-3 gap-sm-2    b2sec3Col2Card mt-2 p-2">
                    <div className="col-1 ">
                      <img
                        src="./assets/b2Comm3.png"
                        className="b2Sec3Img1 my-3 "
                      />
                    </div>
                    <div className="col-7 my-1">
                      <p className="b2Col2p1 mt-3 ">Cassie Evans</p>{" "}
                      <div className="d-flex gap-2">
                        <p className="b2S1p">
                          {" "}
                          <CiCalendar />
                        </p>
                        <p className="b2S1p">July 14,2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="b3s3col1p1 p-3">
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago.
              </p>
              <div className=" d-flex justify-content-between">
                <div className="col-12  ">
                  <div className="row d-flex gap-4 gap-lg-3 gap-xl-3 gap-md-3 gap-sm-2   b2sec3Col2Card mt-2 p-2">
                    <div className="col-1">
                      <img
                        src="./assets/b2RPost1.png"
                        className="b2Sec3Img1 my-3 "
                      />
                    </div>
                    <div className="col-7 my-1">
                      <p className="b2Col2p1 mt-3 ">behzad pashaei</p>{" "}
                      <div className="d-flex gap-2">
                        <p className="b2S1p">
                          {" "}
                          <CiCalendar />
                        </p>
                        <p className="b2S1p">July 14,2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="b3s3col1p1 p-3">
                a river or a lake island may be called an eyot or ait, and a
                small island off the coast may be called a holm. Sedimentary
                islands in the Ganges delta are called chars. A grouping of
                geographically or geologically related islands, such as the
                Philippines, is referred to as an archipelago.
              </p>
            </div>
          </div>
        </div>

        <div className="row  ">
          <div className="col-12 b2Sec3Col12 my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
            <div className=" d-flex justify-content-between">
              <div className="col-9 ">
                <div className="row b2sec3Col1Card d-flex gap-4 gap-lg-4 gap-xl-3 gap-md-4 gap-sm-4  m-0 p-2 ">
                  <div className="col-1 ">
                    <img
                      src="./assets/cardImg6.jpg"
                      className="b2Sec3Img1 my-1 "
                    />
                  </div>
                  <div className="col-6 my-1">
                    <p className="b2Col2p1">Patricia</p>{" "}
                    <div className="d-flex gap-2">
                      <p className="b2S1p">
                        {" "}
                        <CiCalendar />
                      </p>
                      <p className="b2S1p">July 14,2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 mt-2">
                <div className="d-flex gap-2 justify-content-end mt-1 ">
                  <p>
                    {" "}
                    <FaShare />
                  </p>
                  <p>Replay</p>
                </div>
              </div>
            </div>
            <p className="b3s3col1p1">
              An island (or isle) is an isolated piece of habitat that is
              surrounded by a dramatically different habitat, such as water.
              Very small islands such as emergent land features on atolls can be
              called islets, skerries, cays or keys.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex gap-4   my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
          {" "}
          <TbMinusVertical style={{ color: "F81539" }} className="mt-1" />
          <h1 className="b2Commh1"> Add Comments</h1>
        </div>
        <div className="mainForm">
          <div className="row formWidth">
            <div className="col-md-6">
              <form>
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label b2Formh1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label b2Formh1 b2Formh1"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label b2Formh1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label b2Formh1 "
                  >
                    Comments
                  </label>
                  <textarea
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                    id="exampleFormConatct"
                    rows={8}
                    defaultValue={""}
                    placeholder="Search Anything"
                  />
                </div>
              </form>
            </div>
            <div className="col-12 b2Font">
              <div className="d-flex justify-content-between">
                <div className="row">
                  <div className="col-md-4">
                    <p className=" b2Formh1">
                      Rate the usefulness of the article
                    </p>
                  </div>
                  <div className="col-md-8">
                    {" "}
                    <div className="b2Formh1 d-flex gap-lg-5 gap-md-2 gap-sm-2 gap-1">
                      <img src="./assets/icon.png" className="" />
                      <img src="./assets/icon1.png" className="" />
                      <img src="./assets/icon2.png" className="" />
                      <img src="./assets/icon3.png" className="" />
                      <button className="b2IconBtn d-flex gap-2">
                        <img src="./assets/icon4.png" className="" />
                        <p className="b2Formh2">Good</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="b2FormBtn  d-flex justify-content-center align-items-center mt-md-3 mt-sm-3">
            {" "}
            <div className="d-flex gap-2 ">
              <p>
                {" "}
                <FaRegCommentDots />
              </p>
              <p>Send Comments</p>
            </div>
          </button>
        </div>
      </div>

      <div className="container  my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
        <div className="row ">
          <div className="col-12 d-flex justify-content-between  ">
            <div className="d-flex   gap-4 my-3 my-xl-4 my-lg-4 my-md-2 my-sm-2">
              <TbMinusVertical style={{ color: "#F81539" }} className="mt-1" />
              <h1 className="b2Commh1">Recent Posts</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <Slider {...settings}>
            {blogCard.map((item, i) => {
              const { image, image2, title, name, description } = item;
              return (
                <div
                  className="cardB3Main col-md-6  mb-4  col-lg-3 col-xl-4 p-0 p-xl-4 p-lg-4 p-md-0 p-sm-0 "
                  key={i}
                >
                  <div className=" card h-100 cardB2">
                    <img
                      src={image}
                      className="card-img-top blog3ReceImg"
                      alt={title}
                    />
                    <div className="card-body b2CardBody">
                      <h2 className="b2col2h3">{title}</h2>
                      <p className="b2col2p2">{description}</p>
                      <div className="d-flex justify-content-around b2sec3Col3Card my-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={image2}
                            className="b2sec3Img1 p-2"
                            alt="Author Avatar"
                          />
                          <div className="ms-3">
                            <p className="b2Col2p1 mt-3">{name}</p>
                            <div className="d-flex gap-2">
                              <CiCalendar className="mt-1 b2S1p" />
                              <p className="b2S1p">July 14, 2022</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/cardIcon.png"
                            className="b3cardIcon"
                            alt="Card Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <FollowInsta />

      <GetForm />
    </>
  );
};

export default BlogTwo;
{
  /*  */
}
