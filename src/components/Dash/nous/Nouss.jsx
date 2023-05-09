import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import Dashcontent from "./Dashcontent";
 
const Nouss = () => {
    return ( 
        <Div>
             <Sidebar />
             <Dashcontent/>
              
        </Div>
     );
}
 
export default Nouss;
const Div = styled.div`
  position: relative;
`;