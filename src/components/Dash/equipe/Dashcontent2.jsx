import React, { useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import scrollreveal from "scrollreveal";
import Footer from "../../Footer";
export default function Dashcontent2() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <div className="inffo">l'Equipe</div>
      <div className="grid">
        <div className="row__two">
          <Profile />
         
       
        </div>
        <div className="row__one">
        <Footer/>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;

.inffo{
  border:solid 1px  #ffc107;
  width:200px;
  border-radius :12px;
  background-color:#ffc107;
  color :black;
  padding:5px;
  margin-left:5px;
}
.grid {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin-top: 2rem;
  .row__one {
    height: 100%;
    gap: 1rem;
  }
  .row__two {
    text-
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0rem;
    height: 50%;
    width:100%;
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  margin-left: 0;
  .grid {
    .row__one,
    .row__two {
      grid-template-columns: 1fr;
    }
  }
}
`;


