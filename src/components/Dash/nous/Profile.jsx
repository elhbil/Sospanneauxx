import React from "react";
import styled from "styled-components";
import image from "../logo.png";

 
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        {/* <h3>Mr Said </h3> */}
        <br></br>
          <br></br>
         <h3>
         SOS PANNEAUX une entreprise
          spécialisée dans la fabrication et la distribution de panneaux, 
          ainsi que dans d'autres services tels que l'habillage de véhicules,
           les totems et l'aménagement des stands. Sous la direction éclairée 
           de M.Said, notre société offre une gamme complète de solutions 
           créatives pour répondre à tous vos besoins en matière de communication
            visuelle.
          <br></br>
          <br></br>
          Chez SOS PANNEAUX, nous nous engageons à fournir des produits de panneaux 
          de haute qualité pour une variété d'applications, allant de l'architecture
           à la signalisation, en passant par la construction et l'aménagement intérieur. 
           Nos panneaux sont fabriqués avec des matériaux durables et respectueux de
            l'environnement, tout en respectant les normes de qualité les plus strictes
             de l'industrie.
         <br></br>
         <br></br>
         En plus de notre expertise en fabrication de panneaux, SOS PANNEAUX offre également
          une gamme de services complémentaires pour répondre à vos besoins en communication
           visuelle. Notre équipe expérimentée peut vous aider à habiller vos véhicules
            d'entreprise avec des designs percutants et professionnels, garantissant une
             visibilité maximale de votre marque sur la route.
         <br></br>
         <br></br>
         Nous sommes également spécialisés dans la conception, la fabrication et l'installation 
         de totems publicitaires, qui sont des éléments de signalisation verticale
          imposants et accrocheurs pour promouvoir votre entreprise ou votre événement.
           De plus, nous proposons des solutions complètes d'aménagement de stands pour
            vos foires, expositions et événements, créant des espaces attractifs et fonctionnels
             pour représenter au mieux votre marque.
           <br></br>
         <br></br>
         Chez SOS PANNEAUX, nous mettons l'accent sur la satisfaction du client et l'offre
          de solutions sur mesure. Notre équipe de professionnels qualifiés travaille en 
          étroite collaboration avec vous pour comprendre vos besoins spécifiques et vous
           offrir des solutions adaptées à votre budget et à vos objectifs de communication.
            Nous sommes fiers de notre service à la clientèle exceptionnel, de notre expertise
             technique et de notre engagement envers la durabilité environnementale.
             <br></br>
             <br></br>

             En conclusion, SOS PANNEAUX est bien plus qu'une entreprise de fabrication de panneaux.
              Nous offrons une gamme complète de services de communication visuelle, 
              allant de l'habillage de véhicules aux totems publicitaires en passant
               par l'aménagement de stands. Avec notre expertise, notre engagement envers 
               la qualité et la satisfaction du client, ainsi que notre souci de durabilité, 
               nous sommes le partenaire idéal pour tous vos besoins en matière de communication visuelle.
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
        width: 18rem;
         
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