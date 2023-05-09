import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from "react-icons/bs";
export default function Profile() {
  return (
    <div>
    <Section>
      <div className="image">
        {/* <img src={image} alt="" /> */}
      </div>
      <div className="title">
        <h3>Contacter Nous sur Whatsapp : </h3>
        
      </div>
      <div className="info">
      <ReactWhatsapp number="+212 661346891" message="Continuez à Contacter SOS Panneaux" className="what">
      <BsWhatsapp/> Whatsapp
      </ReactWhatsapp>
      </div>
    </Section>

    <Section>
      <div className="image">
        {/* <img src={image} alt="" /> */}
      </div>
      <div className="title">
        <h3>Localisation : </h3>
        
      </div>
      <div className="info">
      <div className="App">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7464686964854!2d-9.552394825176604!3d30.41493430092342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6360a46b0f7%3A0xec76ebb79da8cbce!2sSOS%20PANNEAUX!5e0!3m2!1sen!2sma!4v1681697557785!5m2!1sen!2sma"
        // width="800"
        // height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
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
  margin:8px;
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
  iframe{
    max-height: 50rem;
    overflow: hidden;
    height: 30rem;
    width: 60rem;
    border-radius: 1rem;
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
    .what{
      border:solid 1px  #00A884;
      width:250px;
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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    iframe{
      max-height: 50rem;
      overflow: hidden;
      height: 10rem;
      width: 18rem;
    }
  }
`;
