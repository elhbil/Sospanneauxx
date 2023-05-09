 


import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent4";
const Thermoformage = () => {
     return ( 
          <Div>
                   <Sidebar />
                  <Dashcontent/>
                        
          </Div>
      );
}
 
export default Thermoformage;

const Div = styled.div`
  position: relative;
`;