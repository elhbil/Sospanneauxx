import React, { useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import scrollreveal from "scrollreveal";
import Footer from "../../Footer";
export default function Dashcontent7() {
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
      <div className="inffo">Machine CNC / Fiber Laser</div>
      <div className="grid">
        <div className="row__two">
          <Profile />
          <Profile1 />
          <Profile2 />
       
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
  width:250px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 50%;
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

