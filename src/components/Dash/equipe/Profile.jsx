import React from "react";
import styled from "styled-components";
import image from "./equipe.jpg";

 
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
       
        <br></br>
          <br></br>
         <h3>
         Chez SOS PANNEAUX, nous sommes fiers de notre équipe
          compétente et dévouée, composée de trois équipes clés
           qui collaborent pour offrir des produits et services de qualité.
            Permettez-nous de vous présenter brièvement nos équipes :
          <br></br>
          <br></br>
          <h2> L'équipe des comptables: </h2>
           Notre équipe des comptables assure la gestion financière et administrative 
           de l'entreprise. Ils sont responsables de la tenue des registres financiers, 
           de la gestion des budgets, de la facturation et du suivi des paiements. 
           Leur expertise en matière de gestion financière assure une gestion
            efficace et transparente des opérations financières de l'entreprise.
          <br></br>
         <br></br>
           <h2>L'équipe de design : </h2>
            Notre équipe de designers talentueux et créatifs est chargée de donner 
            vie à vos idées et de créer des designs percutants pour vos panneaux,
             habillages de véhicules, totems et stands. Ils sont experts dans 
             l'utilisation des logiciels de conception graphique de pointe et 
             sont toujours à la recherche de nouvelles tendances et de nouvelles
              approches pour s'assurer que votre communication visuelle est à la
               pointe de l'innovation.
         <br></br>
         <br></br>
          <h2>L'équipe des travaux pratiques : </h2>
            Notre équipe des travaux pratiques est responsable de la fabrication
             et de l'installation de nos produits, en veillant à ce qu'ils soient
              réalisés avec les normes de qualité les plus élevées. Composée de
               professionnels qualifiés et expérimentés, cette équipe travaille en 
               étroite collaboration avec l'équipe de design pour transformer les concepts
                en réalité, en utilisant les dernières techniques de fabrication et 
                d'installation pour garantir des résultats impeccables.
          
          
           <br></br>
         <br></br>
         Toutes nos équipes travaillent en étroite collaboration pour garantir 
         que chaque projet est géré de manière professionnelle, du concept à la 
         réalisation, en respectant les délais et les exigences de nos clients. 
         Nous valorisons le travail d'équipe, la communication ouverte et la 
         collaboration pour assurer le meilleur service possible à nos clients.
             <br></br>
             <br></br>

             Nous sommes fiers de notre équipe dévouée chez SOS PANNEAUX, qui travaille
              sans relâche pour offrir des produits et services de qualité à nos clients.
               Nous sommes convaincus que leur expertise, leur créativité et leur 
               engagement envers l'excellence sont les clés de notre succès.
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