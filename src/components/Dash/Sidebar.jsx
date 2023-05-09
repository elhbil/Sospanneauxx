import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { BsFillFileTextFill } from "react-icons/bs";
import { BsFileBarGraph } from 'react-icons/bs';
import logo from "./logo.png"
import Nouss from "./nous/Nouss";
import Equipe from "./equipe/Equipe";
import Cariere from "./cariere/Cariere";
import List from "./list/List";
import Reseaux from "./reseaux/Reseaux";
import AllHome from "../AllHome";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(parseInt(localStorage.getItem("currentLink")) || 1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);


  useEffect(() => {
    localStorage.setItem("currentLink", currentLink);
  }, [currentLink]);

  
  return (
    <>
      <Section>
        <div className="topp">
          <div className="brandd">
          <img src={logo} alt="" />
       
          </div>
          <div className="togglee">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="linkss">
            <ul>
              <li
                className={currentLink === 1 ? "active" : " "}
                onClick={() => setCurrentLink(1)}
              >
                <a href="/AllDashboard">
                  <BsFillPersonFill />
                  <span> Président/directeur</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : " "}
                onClick={() => setCurrentLink(2)}
              >
                <a href="/Nouss">
                <FaAddressCard />
                  <span> Qui somme nous</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : " "}
                onClick={() => setCurrentLink(3)}
              >
                <a href="/Equipe">
                  <IoIosContacts />
                  <span>L'Equipe </span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : " "}
                onClick={() => setCurrentLink(4)}
              >
                <a href="/Cariere">
                  <BsBookmarkStarFill />
                  <span> Carriére</span>
                </a>
              </li>
              {/* <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="/List">
                  <BsFillFileTextFill />
                  <span> List des références </span>
                </a>
              </li> */}
              <li
                className={currentLink === 5 ? "active" : " "}
                onClick={() => setCurrentLink(5)}
              >
                <a href="/Reseaux">
                  <BsFileBarGraph />
                  <span> Réseau de Distribution</span>
                </a>
              </li>
            </ul>
          </div> 
        </div>

        <div className="backk">
          <a href="/">
            <BsArrowLeftCircle/>
            <span className="back">Back Home</span>
          </a>
        </div>
      
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__linkss">
          <ul>
            <li
              className={currentLink === 1 ? "active" : ""}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">
                <BsFileBarGraph/>
                <span> Président/directeur</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : " "}
              onClick={() => setCurrentLink(2)}
            >
              <a href="#">
              <FaAddressCard />
                <span> qui somme nous</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : " "}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">
                
                <IoIosContacts />
                <span> l'Equipe </span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : " "}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">
              <BsBookmarkStarFill />
                <span> Carriéres</span>
              </a>
            </li>
            {/* <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <BsFillFileTextFill />
                <span> List des références</span>
              </a>
            </li> */}
            <li
              className={currentLink === 5 ? "active" : " "}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">
                <BsFileBarGraph />
                <span> réseau de Distribution</span>
              </a>
            </li>
          </ul>

          <div className="back">
          <a href="/">
            <BsArrowLeftCircle/>
            <span className="back">Back Home</span>
          </a>
        </div>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .topp {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .togglee {
      display: none;
    }
    .brandd {
      img {
        height: 12vh;
        width:100px;
        margin-left:60px;
      }
    }
    .linkss{
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  
  .backk {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }

  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .linkss,
    .backk {
      // display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__linkss {
    ul {
      position:fixed;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      // .active {
      //   background-color: #ffc107;
      //   a {
      //     color: black;
      //   }
      // }
    }
  }
`;
