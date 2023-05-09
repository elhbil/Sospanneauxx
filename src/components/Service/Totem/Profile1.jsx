import React from "react";
import styled from "styled-components";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "../ReusableStyles";
export default function Profile1() {
  return (
    
    <div>
  
      <Section>
      <div className="image">
        <img src={image3} alt="" />
      </div>
      <div className="title">
        <h2> NEOGENIC</h2>
        
      </div>
       
    </Section>
  
  
    <Section>
      <div className="image">
        <img src={image4} alt="" />
      </div>
      <div className="title">
        <h2> ALBORJE</h2>
         
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
    // overflow: hidden;
    border-radius: 23rem;
    img {
      height: 15rem;
      width: 16rem;
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