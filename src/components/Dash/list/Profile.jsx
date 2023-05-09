import React from "react";
import styled from "styled-components";
import image from "../profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
      <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2> Mr Said</h2>
        <h5>
          <HiOutlineLocationMarker /> Agadir, Morocco
        </h5>
      </div>
      <div className="info">
       
        aaaaaaaaaaaaaa
      </div>
    </Section>
  
  
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2> Mr Said</h2>
        <h5>
          <HiOutlineLocationMarker /> Agadir, Morocco
        </h5>
      </div>
      <div className="info">
       
        aaaaaaaaaaaaaa
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
      max-height: 10rem;
      overflow: hidden;
      border-radius: 20rem;
      img {
        height: 10rem;
        width: 10rem;
        object-fit: cover;
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
  
