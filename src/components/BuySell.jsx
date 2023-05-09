import React from "react";
import styled from "styled-components";
import BuySell1 from "../assets/buy-sell-1.png";
import BuySell2 from "../assets/buy-sell-2.jpg";
import BuySell3 from "../assets/buy-sell-3.jpg";

export default function BuySell() {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buySell1">
          <img className="sell1" src={BuySell1} alt="Buy Sell 1" />
          <div className="text">
            <h3>
            Notre entreprise <span>SOS Panneaux</span> dispose d'un large éventail de produits
             qui répondent aux besoins variés de nos clients.
              Nous proposons des panneaux de signalisation routière 
              conformes aux normes réglementaires en vigueur,
               tels que les panneaux de signalisation de direction, 
               d'avertissement, de stationnement, et bien d'autres encore.
                Nos panneaux sont fabriqués avec des matériaux durables et 
                résistants aux intempéries pour garantir leur longévité et leur visibilité.
            </h3>
          </div>
        </div>
        <div className="col" id="buySell2">
          <h3>
          Nous proposons également des panneaux publicitaires
           personnalisables pour les entreprises qui souhaitent promouvoir 
           leur marque ou leurs produits de manière efficace et percutante.
            Nos panneaux publicitaires sont conçus pour attirer l'attention,
             avec des options de personnalisation telles que la taille,
              la forme, les couleurs et les graphismes, afin de répondre 
              aux besoins spécifiques de chaque client.
          </h3>
          <img className="sell2" src={BuySell2} alt="Buy Sell 2" />
        </div>
        <div className="col" id="buySell3">
          <img className="sell3" src={BuySell3} alt="Buy Sell 3" />
          <h3>
          Notre équipe de designers talentueux et passionnés est spécialisée dans la création d'habillages de véhicules sur mesure, pour tous types de véhicules : voitures, camions, motos, bus et plus encore. 
          Nos créations d'habillages de véhicules sont uniques et sur mesure, conçues en tenant compte des besoins et des objectifs spécifiques de chaque client. Nous travaillons en étroite collaboration avec nos clients pour comprendre leur vision, leur identité de marque et leur message, afin de créer des designs qui captent l'attention et laissent une impression durable.
          </h3>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 4rem 8rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .sell1 {
        height: 70vh;
      }
      .sell2 {
        height: 30vh;
        border-radius: 5% 5% 5%  5%;
      }
      .sell3 {
        height: 30vh;
        border-radius: 5% 5% 5%  5%;
      }
      h3 {
        font-size: 1.5rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h4 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
