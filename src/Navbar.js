import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const bar1 = useRef();
  const xmar1 = useRef();

  useEffect(() => {
    xmar1.current.style.display = "none";
  }, []);

  const bars = () => {
    bar1.current.style.display = "none";
    xmar1.current.style.display = "block";
  };

  const xmarks = () => {
    bar1.current.style.display = "block";
    xmar1.current.style.display = "none";
  };

  window.onscroll = function () {
    bar1.current.style.display = "block";
    xmar1.current.style.display = "none";
  };

  return (
    <div className="position-sticky top-0 start-5 z-3">
      <nav className="navbar navbar-expand-lg pb-0 ">
        <div className="container-fluid navConatiner">
          <NavLink to="/" className="nav-link d-lg-none">
            <img width={"60px"} src="./assets/freeLogo.png" alt="" />
          </NavLink>
          <button
            ref={bar1}
            onClick={bars}
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars-staggered"></i>
          </button>

          <button
            onClick={xmarks}
            ref={xmar1}
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-solid fa-xmark"></i>
          </button>

          <div
            className="collapse navbar-collapse navMain"
            id="navbarSupportedContent"
          >
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link " : "nav-link"
                  }
                >
                  <img
                    className="navImg"
                    src="./assets/freeLogo.png"
                    alt=""
                    width={"50px"}
                  />
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 gap-lg-1 gap-md-2 mr-2 d-flex justify-content-end">
              <li className="nav-item homeNavOne">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item homeNavTwo">
                <NavLink
                  to="/Advertise"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Advertise
                </NavLink>
              </li>

              <li className="nav-item homeNavThree">
                <NavLink
                  to="/Distribute"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Distribute
                </NavLink>
              </li>

              <li className="nav-item homeNavFour">
                <NavLink
                  to="/FAQ"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  FAQ
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link activee" : "nav-link"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
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
      </nav>
    </div>
  );
}

export default Navbar;

// import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import "./navbar.css";

// function Navbar() {
//   const bar1 = useRef();
//   const xmar1 = useRef();
//   const navbarSupportedContent = useRef();

//   useEffect(() => {
//     xmar1.current.style.display = "none";
//   }, []);

//   const bars = () => {
//     bar1.current.style.display = "none";
//     xmar1.current.style.display = "block";
//     navbarSupportedContent.current.classList.add("show");
//   };

//   const xmarks = () => {
//     bar1.current.style.display = "block";
//     xmar1.current.style.display = "none";
//     navbarSupportedContent.current.classList.remove("show");
//   };

//   // Close the menu after clicking a link
//   const handleNavLinkClick = () => {
//     bar1.current.style.display = "block";
//     xmar1.current.style.display = "none";
//     navbarSupportedContent.current.classList.remove("show");
//   };

//   window.onscroll = function () {
//     bar1.current.style.display = "block";
//     xmar1.current.style.display = "none";
//     navbarSupportedContent.current.classList.remove("show");
//   };

//   return (
//     <div className="position-sticky top-0 start-5 z-3">
//       <nav className="navbar navbar-expand-lg pb-0">
//         <div className="container-fluid navConatiner">
//           <NavLink to="/" className="nav-link d-lg-none">
//             <img width={"60px"} src="./assets/freeLogo.png" alt="" />
//           </NavLink>
//           <button
//             ref={bar1}
//             onClick={bars}
//             className="navbar-toggler d-lg-none"
//             type="button"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars-staggered"></i>
//           </button>

//           <button
//             onClick={xmarks}
//             ref={xmar1}
//             className="navbar-toggler d-lg-none"
//             type="button"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-solid fa-xmark"></i>
//           </button>

//           <div
//             ref={navbarSupportedContent}
//             className="collapse navbar-collapse navMain"
//             id="navbarSupportedContent"
//           >
//             <ul>
//               <li className="nav-item">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link " : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   <img
//                     className="navImg"
//                     src="./assets/freeLogo.png"
//                     alt=""
//                     width={"50px"}
//                   />
//                 </NavLink>
//               </li>
//             </ul>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 gap-lg-1 gap-md-2 mr-2 d-flex justify-content-end">
//               <li className="nav-item homeNavOne">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item homeNavTwo">
//                 <NavLink
//                   to="/Advertise"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   Advertise
//                 </NavLink>
//               </li>

//               <li className="nav-item homeNavThree">
//                 <NavLink
//                   to="/Distribute"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   Distribute
//                 </NavLink>
//               </li>

//               <li className="nav-item homeNavFour">
//                 <NavLink
//                   to="/FAQ"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   FAQ
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink
//                   to="/ContactUs"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/inquiry"
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   onClick={handleNavLinkClick}
//                 >
//                   Inquiry Now
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
