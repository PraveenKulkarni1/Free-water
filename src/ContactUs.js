// import React from "react";

// import "./contact.css";

// function ContactUs() {
//   return (
//     <div>
//       <div
//         id="ravi"
//         className="container-fluid d-flex  justify-content-center contactMain"
//       >
//         <div className="col-12 col-lg-9 ">
//           <div className="my-2 my-lg-5 my-md-3 my-sm-3 my-xl-5 text-center contactHead">
//             <h1> Media</h1>
//           </div>

//           <div className="d-flex flex-wrap contactRow my-2 my-lg-5 my-xl-5 my-md-3 my-sm-3">
//             <div className="col-10 col-lg-7 col-md-6   border contactForm  contactHeadTwo">
//               <h2 className="text-center text-dark">Contacts</h2>

//               <form className="row row-gap-3 desForm px-3 px-xl-5 px-lg-5 px-md-3 px-sm-3 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
//                 <div>
//                   <input
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     type="text"
//                     placeHolder="Enter Your First name"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     type="text"
//                     placeHolder="Enter Your Last name"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     type="text"
//                     placeHolder="Enter Your Email"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     type="text"
//                     placeHolder="Enter Your  Phone number"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     type="text"
//                     placeHolder="Enter Your Subject"
//                   />
//                 </div>

//                 <div>
//                   <textarea
//                     className="form-control p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 fs-5 rounded-5 border-0 "
//                     id="exampleFormControlTextarea1"
//                     rows="2"
//                     placeholder="Enter Your Message"
//                   ></textarea>
//                 </div>

//                 <div className="text-center contactBtn  mb-xl-4 mb-lg-4 mb-md-3 mb-sm-3 mb-2 ">
//                   <button className="btn btn-info fs-bold text-black">
//                     Send
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="col-md-6 col-lg-5 col-6  col-lg text-center contactImg my-xl-2 my-lg-4 my-md-0 my-sm-0 my-0">
//               <img className=" " src="./ff2.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;

import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import RevolutionAds from "./Component/RevolutionAds";
import FollowInsta from "./Component/FollowInsta";
import GetForm from "./Component/GetForm";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid blueBg">
        <div className="row">
          <div className="col-12 text-center my-2 my-sm-2 my-xl-4 my-lg-4 my-md-3 my-sm-3">
            <h1 className="navHead"> Terms and Conditions</h1>
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
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Us
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
            <h1 className="adSecFourh1"> Contact Us</h1>
            <p className="adSecFourp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-between ">
          <div className="col-md-5">
            <form>
              <div className="d-flex justify-content-between">
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ex JohnDoe214@gmail.com"
                />
              </div>

              <div className="mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label "
                >
                  What can we help you with ?
                </label>
                <textarea
                  className="form-control  p-0 p-xl-2 p-lg-2 p-md-1 p-sm-1"
                  id="exampleFormConatct"
                  rows={3}
                  defaultValue={""}
                  placeholder="Type your message here"
                />
              </div>
              <div className="conatctBtnDiv d-flex justify-content-center align-items-center my-2">
                <button className="contactBtn">Inquiry Nows</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 conColTwo">
            <div className=" d-flex gap-5">
              <p className="conBorder1">We are always here to help</p>
              <p className="conBorder2 d-flex justify-content-end ">
                Hello There !
              </p>
            </div>
            <img src="./assets/contact.png" className="contactImg" />
          </div>
        </div>
      </div>
      <FollowInsta />
      <GetForm />
    </>
  );
};

export default ContactUs;
