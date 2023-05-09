
// import image from "../assets/home.png";
// import image1 from"../assets/design1.png";
// import image11 from"../assets/blog2.png";
// import React from 'react'
// import ReactDOM from 'react-dom'
// import HeroSlider, { Overlay, Slide, Nav,MenuNav } from "hero-slider";
// import Wrapper from "./Wrapper/index.js";
// import Title from "./Title/index.js";
// import Subtitle from "./Subtitle/index.js";
// import styled from "styled-components";
// import SimpleImageSlider from "react-simple-image-slider";
// const imageSources = [image11, image, image1];


// export default function Home() {

//   return (
   
//     <HeroSlider
//       height={'90vh'}
//       autoplay={true}
//       slidingAnimation={'fade'}
//       initialSlide={1}
//       onBeforeChange={(prevSlide, nextSlide) =>
//         console.log('onBeforeChange', prevSlide, nextSlide)
//       }
//       onChange={(nextSlide) => console.log('onChange', nextSlide)}
//       onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
//       style={{
//         backgroundColor: '#fff',
//       }}
//     >
//       <Slide
//         background={{
//           backgroundImageSrc: imageSources[0],
//         }}
//         onBackgroundLoad={() => console.log('Background loaded')}
//       />
//       <Slide
//         background={{
//           backgroundImageSrc: imageSources[1],
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImageSrc: imageSources[2],
//         }}
//       />
//       <MenuNav />
//     </HeroSlider>


 
//   );
// }
import styled from "styled-components";
import image from "../assets/home.png";
import image1 from "../assets/design1.png";
import image11 from "../assets/blog2.png";
import React from 'react'
import HeroSlider, { Slide, MenuNav } from "hero-slider";

const imageSources = [
image1,image11, image
];

export default function Home() {
  return (
    <HeroSlider
      height={'90vh'}
      slidingAnimation={'fade'}
      initialSlide={0}
      autoplay={true}
      interval={5000} // Set the interval between slides in milliseconds
      onBeforeChange={(prevSlide, nextSlide) => console.log('onBeforeChange', prevSlide, nextSlide)}
      onChange={(nextSlide) => console.log('onChange', nextSlide)}
      onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
    >
      {imageSources.map((image, index) => (
        <Slide
          key={index}
          background={{
            backgroundImageSrc: image
          }}
        />
      ))}
      <MenuNav>
  <button key="1">Slide 1</button>
  <button key="2">Slide 2</button>
  <button key="3">Slide 3</button>
</MenuNav>
    </HeroSlider>
  );
}


const StyledSlide = styled(Slide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;