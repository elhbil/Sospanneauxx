import React, { useEffect } from "react";
import Blogs from "./Blogs";
import BuySell from "./BuySell";
import Footer from "./Footer";
import Home from "./Home";
import Home1 from "./Home1";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Designs from "./designs";
import scrollreveal from "scrollreveal";

const AllHome = () => {
    // useEffect(() => {
    //     const registerAnimations = () => {
    //       const sr = scrollreveal({
    //         origin: "bottom",
    //         distance: "80px",
    //         duration: 2000,
    //         reset: false,
    //       });
    //       sr.reveal(
    //         `
    //         nav,
    //         #home,
    //         #buySell1,
    //         #buySell2,
    //         #buySell3,
    //         #blogs,
    //         footer
    //     `,
    //         {
    //           opacity: 0,
    //           interval: 500,
    //         }
    //       );
    //     };
    //     registerAnimations();
    //   }, []);
    //   window.setTimeout(() => {
    //     const home = document.getElementById("home");
    //     // home.style.transform = "none";
    //   }, 1500);
      return (
        <div>
          <ScrollToTop />
          <Navbar />
          <Home />
          <Home1 />
          <Designs />
          <BuySell />
          <Blogs />
          <Footer />
        </div>
      );
}
 
export default AllHome;