import styled from "styled-components";
import Product2 from "./assets/productImage2.png";
import Product3 from "./assets/productImage3.png";
import Product4 from "./assets/productImage4.jpg";
import { useState } from "react";

const Dflex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

interface MovingContainerProps {
  offsetX?: number;
  offsetY?: number;
}

const MovingContainer = styled.div<MovingContainerProps>`
  &:hover {
    cursor: pointer;
    transform: translate(
      ${(props) => props.offsetX}px,
      ${(props) => props.offsetY}px
    );
    transition: transform 0.1s ease-out 0s;
  }
`;

const ContaineOne = styled(MovingContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 66%;
  height: 300px;
  margin-right: 20px;
  border-radius: 20px;

  background: rgb(106, 106, 106);

  background: linear-gradient(
    0deg,
    rgba(106, 106, 106, 1) 49%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0px;
    background: white;
    padding: 20px;
    position: relative;
  }
`;

const ContaineOneImage = styled.img`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 300px;
  width: 40%;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 20px;
  }
`;

const ContaineOneText = styled.div`
  color: white;
  padding: 0px 20px;

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    background-clip: text;
    text-align: center;
  }
`;

const ContainerTwo = styled(MovingContainer)`
  max-width: 400px;
  width: 34%;
  border-radius: 20px;
  height: 300px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
    max-width: 900px;
  }
`;

const ContainerTwoImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
`;

const ContainerTwoText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 46px;
  background-image: linear-gradient(to right, #fefcbf, #ffed4a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const ContainerThree = styled(MovingContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: "DM Sans", sans-serif;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0px;
    padding: 0px 20px;
  }
`;

const ContainerThreeInner = styled.div`
  display: flex;
  max-width: 1320px;
  background-color: #ff7d19;
  height: 350px;
  border-radius: 20px;
  background-image: radial-gradient(
    88% 100% at top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 870px;
  }
`;

const ContainerThreeImage = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  object-fit: fill;
  object-fit: unset;

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 20px;
    filter: brightness(70%);
  }
`;

const ContainerThreeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContainerThreeTextDiscount = styled.div`
  background: linear-gradient(to bottom right, #d1fae5, #a7f3d0);
  background-clip: text;
  color: transparent;
  font-size: 72px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 45px;
  }
`;

const ContainerThreeTextFall = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: white;

  @media (max-width: 1024px) {
    font-size: 45px;
    text-align: center;
  }
`;

export default function Collections() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <>
      <Dflex>
        <ContaineOne
          onMouseMove={handleMouseMove}
          offsetX={offset.x}
          offsetY={offset.y}
        >
          <ContaineOneText>
            <p>Introducing</p>
            <h1>
              EmberStride <span>MAX.</span>
            </h1>
            <h2>
              Now with <span>Maximum</span> Style.
            </h2>
          </ContaineOneText>
          <ContaineOneImage src={Product2} alt="" />
        </ContaineOne>

        <ContainerTwo
          onMouseMove={handleMouseMove}
          offsetX={offset.x}
          offsetY={offset.y}
        >
          <ContainerTwoImage src={Product3} alt="" />
          <ContainerTwoText>
            CitrusStride <span>Classically Different.</span>
          </ContainerTwoText>
        </ContainerTwo>
      </Dflex>
      <ContainerThree
        onMouseMove={handleMouseMove}
        offsetX={offset.x}
        offsetY={offset.y}
      >
        <ContainerThreeInner>
          <ContainerThreeImage src={Product4} alt="" />
          <ContainerThreeText>
            <ContainerThreeTextDiscount>50% OFF</ContainerThreeTextDiscount>
            <ContainerThreeTextFall>Fall Collection</ContainerThreeTextFall>
          </ContainerThreeText>
        </ContainerThreeInner>
      </ContainerThree>
    </>
  );
}
