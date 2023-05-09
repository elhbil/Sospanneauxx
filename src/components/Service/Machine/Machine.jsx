 


import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent7";
const Machine = () => {
     return ( 
          <Div>
                   <Sidebar />
                  <Dashcontent/>
                        
          </Div>
      );
}
 
export default Machine;

const Div = styled.div`
  position: relative;
`;