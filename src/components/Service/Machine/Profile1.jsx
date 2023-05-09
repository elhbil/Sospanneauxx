import React from "react";
import styled from "styled-components";
import image9 from "./image/9.jpg";
import image4 from "./image/4.jpg";
import image5 from "./image/5.jpg";
import image6 from "./image/6.jpg";
 
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image9} alt="" />
      </div>
      <div className="title">
        <h3> Bodor Fiber Laser (1,5m * 3m)</h3>
         
      </div>
      
    </Section>

    
    <Section>
      <div className="image">
        <img src={image4} alt="" />
      </div>
      <div className="title">
        <h3>Design <br></br>(1,5m * 3m)</h3>
         
      </div>
      
    </Section>
    
    <Section>
      <div className="image">
        <img src={image5} alt="" />
      </div>
      <div className="title">
        <h3>Design</h3>
        
      </div>
       
    </Section>
    <Section>
      <div className="image">
        <img src={image6} alt="" />
      </div>
      <div className="title">
        <h3>Design</h3>
        
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