import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import ContactUs from "./ContactUs.js";
import FAQ from "./FAQ.js";
import Holl from "./Holl.js";
import Distribute from "./Distribute.js";
import Advertise from "./Advertise.js";
import InqNow from "./InqNow";
import TermCond from "./TermCond";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import BlogThree from "./BlogThree";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar /> <Home /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/ContactUs"
            element={
              <>
                {" "}
                <Navbar /> <ContactUs /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/FAQ"
            element={
              <>
                {" "}
                <Navbar /> <FAQ /> <Footer />{" "}
              </>
            }
          ></Route>
          {/* <Route path='/Holl' element={<> <Navbar /> <Holl /> <Footer /> </>}></Route> */}
          <Route
            path="/Distribute"
            element={
              <>
                {" "}
                <Navbar /> <Distribute /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/Advertise"
            element={
              <>
                {" "}
                <Navbar /> <Advertise /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/inquiry"
            element={
              <>
                {" "}
                <Navbar /> <InqNow /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/terms-condition"
            element={
              <>
                {" "}
                <Navbar /> <TermCond /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/blog-one"
            element={
              <>
                {" "}
                <Navbar /> <BlogOne /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/blog-two"
            element={
              <>
                {" "}
                <Navbar /> <BlogTwo /> <Footer />{" "}
              </>
            }
          ></Route>
          <Route
            path="/blog-three"
            element={
              <>
                {" "}
                <Navbar /> <BlogThree /> <Footer />{" "}
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
