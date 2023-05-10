import React, { Component } from 'react';
import Slider from 'react-slick';
import image1 from '../assets/design1.png';
import image11 from '../assets/blog2.png';
import image from '../assets/home.png';
import styled from "styled-components";
import photo from "./Service/Plv/image/1.jpg"
import photo2 from "./Service/Plv/image/2.jpg"
import photo3 from "./Service/Plv/image/3.jpg"
import photo4 from "./Service/Plv/image/4.jpg"
import photo5 from "./Service/Plv/image/6.jpg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageSources = [image1, image11, image];

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 1, // 1 for forward, -1 for backward
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { direction } = this.state;
      const nextSlide =
        direction === 1 ? this.slider.slickNext() : this.slider.slickPrev();
      if (nextSlide === false) {
        // reached end of slider, change direction
        this.setState({ direction: direction * -1 });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const settings = {
      breakpoint: 480,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    const imageSources = [
      {src: photo5, size: "3500w"},
      {src: photo4, size: "3500w"},
      {src: photo, size: "3500w"},
      {src: photo3, size: "3500w"},
      {src: photo2, size: "3500w"}
    ];
    
    const sliderStyle = { width: '98%',
                          backgroundColor:'#212121'  
                          };

    const mobileSettings = {
      // settings for screens narrower than 768px
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 2,
    };

    return (
      <Div>
        <div className='space'>
         <h1 className='text-center'>SOSPANNEAUX</h1>
         </div>
      <Slider  ref={(slider) => (this.slider = slider)} {...settings} {...mobileSettings} style={sliderStyle}>
      {imageSources.map((image) => (
        <div key={image.src}>
          <img src={image.src} srcSet={`${image.src} ${image.size}`} alt="slide" />
        </div>
      ))}
    </Slider>
    </Div>
    );
  }
}

const Div =  styled.section`
  .space{
    height: 5em;
    padding-top:20px;
  }
  h1{
    text-align: center;
    background-color: var(--primary-color);
  }
 
    background-size: cover;
    background-position: center center;
 
`;
