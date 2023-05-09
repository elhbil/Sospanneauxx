import React from "react";
import styled from "styled-components";
import image from "./car.png";

 
import { cardStyles } from "../ReusableStyles";
export default function Profile() {
  return (
    
    <div>
  
     
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
      <h2> la Carriéres de SOS PANNEAUX :  </h2>
        <br></br>
          <br></br>
         <h3>
         Depuis plus de 10 ans, SOS PANNEAUX s'est établi comme l'un des leaders de l'industrie des panneaux publicitaires, de l'habillage de véhicules, des totems et de l'aménagement des stands. Notre société a connu une croissance constante au cours de cette décennie, grâce à notre engagement envers la qualité, la créativité et le service client exceptionnel.
          <br></br>
          <br></br>
         
          Au fil des années, nous avons développé une expertise approfondie dans la conception, la fabrication et l'installation de panneaux publicitaires et d'autres solutions de communication visuelle. Notre équipe de design hautement qualifiée a toujours été à l'avant-garde des tendances du marché, en proposant des designs innovants et percutants qui captivent l'attention de notre public cible.
          <br></br>
         <br></br>
            
           Notre équipe des travaux pratiques, composée de professionnels expérimentés, utilise les dernières techniques de fabrication et d'installation pour garantir que nos produits sont réalisés avec les normes de qualité les plus élevées. Nous avons investi dans des équipements de pointe et des processus de production efficaces pour assurer une fabrication rapide et précise de nos panneaux et autres produits.
         <br></br>
         <br></br>
           
          En tant qu'entreprise axée sur la satisfaction du client, nous mettons un fort accent sur le service client. Notre équipe dédiée est toujours prête à collaborer étroitement avec nos clients, à écouter leurs besoins et à les conseiller sur les meilleures solutions pour répondre à leurs objectifs de communication. Notre approche personnalisée et notre engagement envers la satisfaction du client ont permis d'établir des relations solides et durables avec nos clients, qui continuent de nous faire confiance pour leurs besoins en communication visuelle.
          
          
           <br></br>
         <br></br>
         En outre, notre équipe des comptables assure une gestion financière et administrative rigoureuse, garantissant une stabilité financière et une transparence dans nos opérations.
             <br></br>
             <br></br>

             Au cours de ces 10 dernières années, nous avons réalisé avec succès de nombreux projets de grande envergure pour des entreprises de divers secteurs, en apportant notre expertise, notre créativité et notre professionnalisme à chaque projet.
             <br></br>
             <br></br>
             Nous sommes fiers de notre parcours et nous nous engageons à continuer d'innover, de fournir des produits et services de qualité supérieure, et de satisfaire les besoins de communication visuelle de nos clients.
             <br></br>
             <br></br>
             Nous remercions sincèrement tous nos partenaires et clients pour leur confiance continue et nous sommes impatients de continuer à servir leurs besoins en communication visuelle pour les années à venir.
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