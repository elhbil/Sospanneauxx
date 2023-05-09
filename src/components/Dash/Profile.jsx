import React from "react";
import styled from "styled-components";
import image from "./profile.jpeg";

 
import { cardStyles } from "./ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Mr Said </h2>
         <h3>
         M. Said possède une expérience de plus de 20 ans dans la
          fabrication et la distribution de panneaux pour divers secteurs,
        Son expertise technique et sa connaissance approfondie du marché 
        lui ont permis de bâtir une réputation solide dans l'industrie.
          <br></br>
          <br></br>
        En tant que Président/Directeur, M. Said a su diriger avec succès 
        son entreprise en période de défis économiques et technologiques.
         Il a mis en œuvre des stratégies novatrices pour améliorer 
         la productivité, optimiser les processus de fabrication et 
         renforcer les relations avec les partenaires commerciaux.
         <br></br>
         <br></br>
         Sous sa direction, la société SOS Panneaux de Mr Said a connu
          une croissance significative, devenant l'un des leaders du marché.
          Il a su développer et maintenir des relations étroites avec les clients,
        en offrant des produits de haute qualité, des solutions personnalisées
         et un service à la clientèle exceptionnel.
         <br></br>
         <br></br>
         Au-delà de ses compétences professionnelles, M.Said est également
          un leader inspirant et motivant pour son équipe. Il croit en la
           valeur de chaque employé et encourage la créativité, l'esprit 
           d'équipe et l'amélioration continue.
           <br></br>
         <br></br>
         En conclusion, M.Said est un Président/Directeur dynamique et 
         visionnaire dans le secteur des panneaux. Son expertise technique,
          son leadership solide et sa passion pour l'innovation ont permis
           à son entreprise de se démarquer dans un marché compétitif. 
           Son engagement envers la durabilité et son approche centrée 
           sur le client font de lui un leader respecté et admiré .
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