import React, { useState } from "react";
import "./faqSection.css";
import { FiPlus } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [1, 2, 3, 4]; // Replace with actual FAQ data if available

  return (
    <div className="container-fluid secSevenBg ">
      <div className="container ">
        <div className="row  ">
          <div className="sevelMain">
            <div className="col-12 sevelCol my-3 my-xl-5 my-lg-5 my-md-5 p-0 my-sm-3">
              {faqItems.map((item, index) => (
                <div
                  className={`${
                    index !== 3 // Remove border for the 4th item (index 3)
                      ? " border-bottom border-info py-1 px-3 px-xl-5 px-lg-5 px-md-3 px-sm-3 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3"
                      : "  py-1 px-3 px-xl-5 px-lg-5 px-md-3 px-md-3 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3"
                  }`}
                  key={index}
                >
                  <div
                    className="d-flex justify-content-between align-items-center "
                    onClick={() => handleToggle(index)}
                  >
                    <div className="d-flex gap-5 justify-content-center align-items-center">
                      <h1 className="sevenSLNo">{`0${item}`}</h1>
                      {console.log(index)}
                      <h5 className="sevenContent">Where can I watch?</h5>
                    </div>
                    <h3 className="toggle-icon">
                      {activeIndex === index ? (
                        <GrFormClose className="homeFaqMinus" />
                      ) : (
                        <FiPlus className="homeFaqPlus" />
                      )}
                    </h3>
                  </div>
                  <div
                    className={`collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="colOption">
                      Nibh quisque suscipit fermentum netus nulla cras porttitor
                      euismod nulla. Orci, dictumst nec aliquet id ullamcorper
                      venenatis. Fermentum sulla cras porttitore ismod nulla.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

// import React, { useState } from "react";
// import "./faqSection.css";
// import { FiPlus } from "react-icons/fi";
// import { GrFormClose } from "react-icons/gr";

// const FAQSection = () => {
//   // Replace with actual FAQ data if available

//   return (
//     <div className="container-fluid secSevenBg">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 sevelCol my-2 my-xl-5 my-lg-5 my-md-5 p-0 my-sm-3">
//             <div className="border-bottom border-info py-1 px-1 px-xl-5 px-lg-5 px-md-3 px-md-2 my-2 my-xl-5 my-lg-5 my-md-4 my-sm-3">
//               <div className="d-flex justify-content-between align-items-center flex-column">
//                 <div className="d-flex gap-5 justify-content-center align-items-center">
//                   <div
//                     className="d-flex justify-content-between align-items-center"
//                     data-bs-toggle="collapse"
//                     href="#collapseExample1"
//                     role="button"
//                     aria-expanded="false"
//                     aria-controls="collapseExample"
//                   >
//                     <h1 className="sevenSLNo">01</h1>

//                     <h5 className="sevenContent">Where can I watch?</h5>
//                   </div>
//                   <h3 className="toggle-icon">
//                     <FiPlus className="homeFaqPlus" />
//                   </h3>
//                 </div>
//                 <div className="">
//                   <div className="colOption" id="collapseExample1">
//                     Nibh quisque suscipit fermentum netus nulla cras porttitor
//                     euismod nulla. Orci, dictumst nec aliquet id ullamcorper
//                     venenatis. Fermentum sulla cras porttitore ismod nulla.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;
