 


import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent2";
const Ecran = () => {
     return ( 
          <Div>
                   <Sidebar />
                  <Dashcontent/>
                        
          </Div>
      );
}
 
export default Ecran;

const Div = styled.div`
  position: relative;
`;