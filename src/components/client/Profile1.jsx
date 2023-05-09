import React from "react";
import styled from "styled-components";
import image1 from "./image/6.jpg";
import image2 from "./image/7.jpg";
import image3 from "./image/8.jpg";
import image4 from "./image/9.jpg";
import image5 from "./image/10.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
      <Section>
      <div className="image">
        <img src={image1} alt="" />
      </div>
      <div className="title">
        <h2> Assaka</h2>
       
      </div>
    
    </Section>
  
  
    <Section>
      <div className="image">
        <img src={image2} alt="" />
      </div>
      <div className="title">
        <h2> HBZ Group</h2>
        
      </div>
      
    </Section>

    <Section>
      <div className="image">
        <img src={image3} alt="" />
      </div>
      <div className="title">
        <h2> C.T.P.D</h2>
         
      </div>
       
    </Section>

    <Section>
      <div className="image">
        <img src={image4} alt="" />
      </div>
      <div className="title">
        <h2> HYUNDAI</h2>
         
      </div>
       
    </Section>

    <Section>
      <div className="image">
        <img src={image5} alt="" />
      </div>
      <div className="title">
        <h3> Commun urbian l'qliaa</h3>
      
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
      height: 18rem;
      width: 20rem;
      // object-fit: cover;
      border-radius: 1rem;
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
    h3 {
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