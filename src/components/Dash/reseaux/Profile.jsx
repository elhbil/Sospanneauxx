import React from "react";
import styled from "styled-components";
import image from "./maroc.png";

 
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
      <h2> Réseau de Distribution de SOS PANNEAUX :  </h2>
        <br></br>
          <br></br>
         <h3>
         Nous sommes ravis de vous présenter le réseau de distribution de SOS PANNEAUX qui couvre à la fois le Maroc et la France. Depuis notre siège social basé au Maroc, nous avons établi un solide réseau de distribution qui s'étend sur ces deux pays, nous permettant de fournir nos produits et services de communication visuelle de haute qualité à une large clientèle.          <br></br>
          <br></br>
         
          Au Maroc, nous avons mis en place un réseau de distribution bien établi avec des partenaires stratégiques dans différentes régions du pays. Grâce à nos partenariats solides, nous sommes en mesure de desservir efficacement et rapidement nos clients dans tout le Maroc, que ce soit dans les grandes villes ou dans les régions plus éloignées. Notre équipe de vente dédiée travaille en étroite collaboration avec nos partenaires locaux pour répondre aux besoins spécifiques de nos clients et garantir un service client exceptionnel.          <br></br>
         <br></br>
            
         En France, nous avons également établi un réseau de distribution qui nous permet de servir nos clients dans différentes régions du pays. Nos partenaires de distribution en France sont soigneusement sélectionnés pour leur expertise et leur connaissance du marché local. Grâce à leur appui, nous sommes en mesure de fournir des produits et services de qualité supérieure à nos clients en France, en respectant les normes et les régulations du marché français.         <br></br>
         <br></br>
           
         Notre réseau de distribution étendu nous permet de répondre efficacement aux besoins de nos clients, où qu'ils se trouvent dans le Maroc et en France. Nous sommes fiers de la qualité de nos produits et services, ainsi que de notre engagement envers la satisfaction du client. Notre équipe de vente et de service client travaille en étroite collaboration avec nos partenaires de distribution pour garantir une communication fluide et un service rapide et fiable.          
          
           <br></br>
         <br></br>
         Nous sommes reconnaissants envers nos partenaires de distribution pour leur confiance et leur soutien continu, ainsi qu'envers nos clients pour leur fidélité et leur collaboration. Nous sommes impatients de continuer à servir nos clients à travers notre réseau de distribution, en proposant des solutions de communication visuelle innovantes et de haute qualité pour répondre à leurs besoins.             <br></br>
          
          </h3>
      </div>
      
    </Section>

    
    
       
     
  
   </div>      
    
  
      
  
      
      
    );
  }
  const Section = styled.section`
    ${cardStyles};
    width:100%;
    display: block;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin:8px;
    .image {
      text-align: center;
      max-height: 53rem;
       
      border-radius: 23rem;
      img {
        height: 16rem;
        width: 17rem;
         
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
     
      h2{
        //  text-align: center;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.3rem;
      }
      h3 {
        color: white;
        letter-spacing: 0.1rem;
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