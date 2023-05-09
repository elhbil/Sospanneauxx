import React from "react";
import styled from "styled-components";
import image9 from "./image/9.jpg";
import image10 from "./image/10.jpg";
import image11 from "./image/11.jpg";
import image12 from "./image/12.jpg";
import image13 from "./image/13.jpg";
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
        <h3> Mixte Dind </h3>
         
      </div>
      
    </Section>

    
    <Section>
      <div className="image">
        <img src={image10} alt="" />
      </div>
      <div className="title">
        <h3> Sodivias</h3>
         
      </div>
      
    </Section>
    
    <Section>
      <div className="image">
        <img src={image11} alt="" />
      </div>
      <div className="title">
        <h3>Super Marche  </h3>
        
      </div>
       
    </Section>
    <Section>
      <div className="image">
        <img src={image12} alt="" />
      </div>
      <div className="title">
        <h3>C.o.a.t Grob   </h3>
        
      </div>
       
    </Section>
    <Section>
      <div className="image">
        <img src={image13} alt="" />
      </div>
      <div className="title">
        <h3>Saca Club  </h3>
        
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
        width: 16rem;
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