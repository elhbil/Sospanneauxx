import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import ReactWhatsapp from 'react-whatsapp';

export default function Profile() {
  return (
    <Section>
      
      <div className="image">
        {/* <img src={image} alt="" /> */}
      </div>
      <div className="title">
        <h3>Contacter Nous sur Gmail</h3>
        
      </div>
      <div className="info">
      <ReactWhatsapp number="+212 691797543" message="Continuez à Contacter SOS Panneaux" className="what">
            Whatsapp
        </ReactWhatsapp>
      </div>
    </Section>
  );
}
const Section = styled.section`
${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 1rem;
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
    h3,
    h5 {
      color: #ffc107;
      // font-family: "Permanent Marker", cursive;
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
    .what{
      border:solid 1px  #00A884;
      width:200px;
      border-radius :12px;
      background-color:#00A884;
      color :white;
      padding:5px;
      margin-left:5px;
      cursor:pointer;
      &:hover {
        
          transform: scale(1.1);
        
      }
    }
  }
`;
