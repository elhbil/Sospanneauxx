import React from "react";
import styled from "styled-components";
import image from "./image/1.jpg";
import image1 from "./image/2.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "../ReusableStyles";
export default function Profile2() {
  return (
    
    <div>
  
      <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2> TOTAL</h2>
        
      </div>
       
    </Section>
  
  
    <Section>
      <div className="image">
        <img src={image1} alt="" />
      </div>
      <div className="title">
        <h2> PATI PAIN</h2>
         
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
    max-height: 43rem;
  
    border-radius: 23rem;
    img {
      height: 20rem;
      width: 20rem;
      
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