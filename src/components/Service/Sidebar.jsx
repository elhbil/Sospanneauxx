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
import logo from "./image/logo.png";
import Amenagement from "./Amenagement/Amenagement";
import Ecran from "./Ecran/Ecran";
import Plv from "./Plv/Plv";
import Thermoformage from "./Thermoformage/Thermoformage";
import AllService from "./AllService";
import Totem from "./Totem/Totem";
import Vinyle from "./Vinyle/Vinyle";
import Machine from "./Machine/Machine";

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
      .links>ul>li:nth-of-type(7),
      .logout
      `,
      {
        opacity: 1,
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
        <div className="top">
          <div className="brand">
          <img src={logo} alt="" />
       
          </div>
          <div className="toggle">
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
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="/AllService">
                  <BsFillPersonFill />
                  <span>Habillage Véhicule</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="/Totem">
                <FaAddressCard />
                  <span> Totem</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="/Ecran">
                  <IoIosContacts />
                  <span>Écrans video Led </span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="/Amenagement">
                  <BsBookmarkStarFill />
                  <span> Aménagement Des Stands</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="/Plv">
                  <BsFillFileTextFill />
                  <span> PLV </span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="/Thermoformage">
                  <BsFileBarGraph />
                  <span> Thermoformage</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="/Vinyle">
                  <BsFileBarGraph />
                  <span> Vinyle</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="/Machine">
                  <BsFileBarGraph />
                  <span> Machine CNC / Fiber Laser</span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <a href="/" >
                <BsArrowLeftCircle/>
                  <span>Back Home</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            
          </div>
        </div>

      
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="/AllService">
                <BsFileBarGraph/>
                <span> Habillage Véhicule</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="/Totem">
              <FaAddressCard />
                <span> Totem</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="Ecran">
                
                <IoIosContacts />
                <span> Écrans video Led </span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="/Amenagement">
              <BsBookmarkStarFill />
                <span>  Aménagement Des Stands</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="/Plv">
                <BsFillFileTextFill />
                <span> PLV</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="/Thermoformage">
                <BsFileBarGraph />
                <span> Thermoformage</span>
              </a>
            </li>
          </ul>
          <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="/Vinyle">
                <BsFileBarGraph />
                <span> Vinyle</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(7)}
            >
              <a href="/Machine">
                <BsFileBarGraph />
                <span>  Machine CNC / Fiber Laser</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(7)}
            >
              <a href="/" className="back">
                <BsFileBarGraph />
                <span>Back Home</span>
              </a>
            </li>
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
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      img {
        height: 12vh;
        width:100px;
        margin-left:60px;
      }
    }
    .links{
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 0.5rem;
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
  
  .back {
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
    .topi {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .togglei {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brandi {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .topi > .links,
    .logout {
      display: none;
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
  .responsive__links {
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
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
