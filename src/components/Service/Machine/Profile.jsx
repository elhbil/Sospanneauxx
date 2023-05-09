import React from "react";
import styled from "styled-components";
import image7 from "./image/7.jpg";
import image8 from "./image/8.jpg";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image7} alt="" />
      </div>
      <div className="title">
        <h3> Bodor Laser (1,5m * 3m) </h3>
         
      </div>
      
    </Section>

    
    <Section>
      <div className="image">
        <img src={image8} alt="" />
      </div>
      <div className="title">
        <h3> Bodor Laser (1,2m * 1,5m)</h3>
         
      </div>
      
    </Section>
    
    <Section>
      <div className="image">
        <img src={image1} alt="" />
      </div>
      <div className="title">
        <h3>Design </h3>
        
      </div>
       
    </Section>
    <Section>
      <div className="image">
        <img src={image2} alt="" />
      </div>
      <div className="title">
        <h3>Design </h3>
        
      </div>
       
    </Section>

    <Section>
      <div className="image">
        <img src={image3} alt="" />
      </div>
      <div className="title">
        <h3>Design </h3>
        
      </div>
       
    </Section>
  
   </div>      
    
  
      
  
      
      
    );
  }
  const Section = styled.section`
    ${cardStyles};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin:8px;
    .image {
      max-height: 53rem;
      // overflow: hidden;
      border-radius: 23rem;
      img {
        height: 16rem;
        width: 17rem;
        // object-fit: cover;
        border-radius: 0.5rem;
        transition: 0.5s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .title {
      text-align: center;
      h3,
      h5 {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.3rem;
      }
      h4 {
        letter-spacing: 0.2rem;
      }
    }
    .info {
      display: flex;
      gap: 1rem;
      .container {
        text-align: center;
      }
    }
  `;