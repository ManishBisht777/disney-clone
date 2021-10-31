import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Cta>
        <Ctalogoone src="/images/cta-logo-one.svg" alt="" />
        <Signup>GET ALL THERE</Signup>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          aliquid cupiditate dolor quod facilis facere quas a culpa tempore
          ratione sed quis quos in nisi laborum iusto, sunt sapiente porro!
        </Description>
        <Ctalogotwo src="/images/cta-logo-two.png" alt="" />
      </Cta>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    background: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    z-index: -1;
  }
`;

const Cta = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ctalogoone = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0062e5;
  font-size: 18px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  padding: 17px 0;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: center;
`;

const Ctalogotwo = styled(Ctalogoone)`
  width: 90%;
`;
