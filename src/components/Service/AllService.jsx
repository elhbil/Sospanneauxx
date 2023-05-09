import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Service from "./Service";
export default function AllService() {
  return (
    <Div>
      <Sidebar />
      <Service />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;