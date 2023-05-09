import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";
import AllService from "./Service/AllService";
import AllDashboard from "./Dash/AllDashboard";
import Contact from "./Contact/Contact";
import Client from "./client/Client";

export default function Footer() {
  const links = [
 
    {
      title: "Contact",
      links: [
        "Fax : 05 28 23 58 59  Fax: 05 28 22 58 57    Fax: 05 28 22 58 59",
        "s.panneaux@gmail.com",
        `N 18 Rue Zayzafoun ,Quariter Dakhla , AGADIR 8000
      `,
      ],
    },
  ];
  return (
    <Footr>
      <div className="upper__footer">
        <div className="brand">
          <img src={logo} alt="Footer Logo" />
          <p>
          Nous sommes impatients de te présenter plus en détail <br></br>
          notre société de panneaux et nos produits .<br/>
           N'hésite pas de regarder tout les services de notre société <br/>
            et contacter nous pour toute information supplémentaire.
          </p>
        
        </div>

        <div className="links" >
              <h3>Company</h3>
              <ul>
                <a href="/" className="aa">Accueil</a>
              </ul>
              <ul>
                <a href="/AllDashboard" className="aa">l'Entreprise</a>
              </ul>
              <ul>
                <a href="/AllService" className="aa">Nos Services</a>
              </ul>
              <ul>
                <a href="/Client" className="aa">Nos clients</a>
              </ul>
              <ul>
                <a href="/Contact" className="aa">Contacte / Localisation</a>
              </ul>
            </div>

        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          );
        })}
       
        <div ><img src={logo} className="im"></img></div>
      </div>
      <div className="lower__footer">
        <span>&copy; Abdellah elhbil</span>
        <ul>
          <li>
             <a className="aa" href="https://www.facebook.com/spanneaux"> Facebook</a>
            </li>
          <li>
             <a className="aa" href="https://www.instagram.com/sos_panneaux/">Instagram</a>
            </li>
        </ul>
      </div>
    </Footr>
  );
}

const Footr = styled.footer`
  border-top: 0.02rem solid var(--primary-color);
  margin: 5rem 0rem 1rem 0rem;
  .im{
    height: 9rem;
      width: 9rem;
  }
  .aa{
    color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
  }
  .upper__footer {
    margin: 0 5rem;
    // display: grid;
    // grid-template-columns: 3fr 1fr 1fr 1fr;
    display:flex;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
       
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      img {
        height: 2rem;
      }
      .mail-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          padding: 0.8rem 1rem;
          border-radius: 0.3rem;
          border: none;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.8rem 1rem;
          gap: 0.5rem;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        color: var(--primary-color);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        li {
          cursor: pointer;
          transition: 0.3s ease-in-out;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .lower__footer {
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.02rem solid var(--primary-color);
    padding-top: 1rem;
    margin-top: 1rem;
    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .im{
      height: 4rem;
        width: 4rem;
    }
    .upper__footer {
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand {
        .mail-container {
          flex-direction: column;
          align-items: flex-start;
        }
      
      }
      .links {
        ul {
          list-style-type: none;
        }
      }
    }
    .lower__footer {
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
