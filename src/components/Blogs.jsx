import React from "react";
import styled from "styled-components";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export default function Blogs() {
   
  return (
    <Section id="blogs">
      <div className="title">
        <h2>PLUS</h2>
        <h5>SOS PANNEAUX</h5>
      </div>
      <div className="blogs">
            <div className="blog" >
              <img src={blog1} alt="Blog Image" />
              <div className="data">
                <h4 className="blog1">SOS PANNEAUX</h4>
                 
                <p>
                Notre société a été fondée il 
                y a plus de 10 ans avec une passion pour
                 la conception création des panneaux. Depuis lors,
                  nous avons acquis une expertise solide et une 
                  réputation inégalée dans l'industrie de 
                  l'habillage de véhicules.
                </p>
              </div>
            </div>
      
            <div className="blog" >
              <img src={blog1} alt="Blog Image" />
              <div className="data">
                <h4>SOS PANNEAUX</h4>
                 
                <p>
                Au fil des années, nous avons travaillé avec un 
                large éventail de clients, allant des petites entreprises
                 locales aux grandes marques internationales, dans divers 
                 secteurs tels que l'automobile, la restauration, la technologie,
                  le sport, et bien d'autres encore. Notre expérience diversifiée
                   nous a permis de comprendre les besoins spécifiques de chaque 
                   client et de développer des solutions   sur mesure pour 
                   répondre à leurs exigences.
                </p>
              </div>
            </div>

            <div className="blog" >
              <img src={blog1} alt="Blog Image" />
              <div className="data">
                <h4>SOS PANNEAUX</h4>
                 
                <p>
              
                 Notre processus de création notre services est bien rodé,
                  de la conception initiale à la production et à 
                  l'installation finale. Nous travaillons en étroite
                   collaboration avec nos clients à chaque étape du
                    processus, en les tenant informés, en écoutant 
                    leurs idées et en leur fournissant des conseils d'experts
                     pour garantir un résultat final qui dépasse leurs attentes.
                </p>
              </div>
            </div>
      </div>
    </Section>
  );
}

const Section = styled.section`

  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
     img{
        width: 99%;
      }
     
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
