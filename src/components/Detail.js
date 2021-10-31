import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <Imgtitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </Imgtitle>
      <Controls>
        <Play>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </Play>
        <Trailer>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <Groupwatch>
          <img src="/images/group-icon.png" alt="" />
        </Groupwatch>
      </Controls>
      <Subtitle>
        2013 ​You can join the Zoom through the link in the description!
      </Subtitle>
      <Description>
        ​You can join the Zoom through the link in the description!​You can join
        the Zoom through the link in the description!​You can join the Zoom
        through the link in the description!​You can join the Zoom through the
        link in the description!
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding: 0px calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Imgtitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Play = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  border: none;
  height: 56px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const Add = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const Groupwatch = styled(Add)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  margin-top: 26px;
  min-height: 20px;
  font-size: 15px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
