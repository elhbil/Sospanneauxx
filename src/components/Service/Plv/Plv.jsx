 


import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent1";
const Plv = () => {
     return ( 
          <Div>
                   <Sidebar />
                  <Dashcontent/>
                        
          </Div>
      );
}
 
export default Plv;

const Div = styled.div`
  position: relative;
`;