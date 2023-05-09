import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import image5 from "./image/5.jpg"
import image6 from "./image/6.jpg"
import { cardStyles } from "./ReusableStyles";
export default function Profile2() {
  return (
    
    <div>
  
     <Section>
      <div className="image">
        <img src={image5} alt="" />
      </div>
      <div className="title">
        <h2>SOS PANNEAUX</h2>
        
      </div>
      
    </Section>
  
  
    <Section>
      <div className="image">
        <img src={image6} alt="" />
      </div>
      <div className="title">
        <h2> SOS PANNEAUX</h2>
        
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
      max-height: 23rem;
      
      border-radius: 23rem;
      img {
        height: 15rem;
        width: 15rem;
        // object-fit: cover;
        border-radius: 20rem;
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
      h2,
      h5 {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.3rem;
      }
      h5 {
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
  