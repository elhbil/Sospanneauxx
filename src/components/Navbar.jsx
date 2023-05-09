import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import AllDashboard from "./Dash/AllDashboard";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import AllHome from "./AllHome";
import AllService from "./Service/AllService";
import Contact from "./Contact/Contact";
import Client from "./client/Client";
export default function Navbar() {
  const [navState, setNavState] = useState(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="sospanneaux" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href='Alldashboard'>l'Enreprise</a>
          </li>
          <li>
            <a href="AllService">Nos Services</a>
          </li>
          <li>
            <a href="/Client">Nos Client</a>
          </li>
          <li>
            <a href="Contact">Contact / Localisation </a>
          </li>
         

        </ul>
       
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
background-color:#212121;
  display: flex;
  justify-content: space-between;
  padding:5px;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 10vh;
        width:70px;
        margin-left:40px;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        &:first-of-type {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    width: 100%;
    margin: 0;

    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: #000;

      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: black;
      flex-direction: column;
      margin-top: 5rem;
      width: 100vw;
      padding: 5rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;
