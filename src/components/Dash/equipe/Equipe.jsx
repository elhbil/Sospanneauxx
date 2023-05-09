 

import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent2";
const Equipe = () => {
     return ( 
          <Div>
                   <Sidebar />
                  <Dashcontent/>
                        
          </Div>
      );
}
 
export default Equipe;

const Div = styled.div`
  position: relative;
`;