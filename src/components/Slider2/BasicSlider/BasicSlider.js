import React from "react";
// JSX
import HeroSlider, { Slide,Nav, OverlayContainer } from "hero-slider";
 import Wrapper from "../../Wrapper";


// Images
// const bogliasco = "https://i.imgur.com/TTY0735.jpg";
// const countyClare = "https://i.imgur.com/Hunc7xC.jpg";
// const craterRock = "https://i.imgur.com/g4uCOuZ.jpg";
// const giauPass = "https://imgur.com/KHbFKkm.jpg";
import photo from "./equipe.jpg"
import photo1 from"../../../assets/blog1.jpg";

const BasicSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="fade"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)"
   
       
      }}
      settings={{
        slidingDuration: 1500,
        slidingDelay: 1000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 100,
        height: "80vh"
      }}
    >
     

      <Slide
      
        background={{
          backgroundImageSrc: photo1,
          backgroundAttachment: "fixed",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "hidden"
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: photo1,
          backgroundAttachment: "fixed",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "hidden"
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: photo,
          backgroundAttachment: "fixed",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "hidden"
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: photo,
          backgroundAttachment: "fixed",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "hidden"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default BasicSlider;
