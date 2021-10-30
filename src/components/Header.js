import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <p>header</p>
      <p>this is header</p>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background: #090b13;
`;
