import styled from "styled-components";
import logo from "./assets/logo.svg";
import mainImage from "./assets/mainImage.png";
import arrow from "./assets/arrow.svg";
import NavBar from "./NavBar";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7d19;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ff5500;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: #ff7d19 #f1f1f1;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  font-family: "DM Sans", sans-serif;
  p {
    color: grey;
    font-family: "Kumbh Sans", sans-serif;
    font-optical-sizing: auto;
  }

  &:focus {
    outline: none;
  }
`;

const BgImage = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  img:first-child {
    padding: 0px 30px;
    top: 30%;
    position: absolute;
    max-width: 576px;
    width: 100%;
  }
  ${HeaderButton} {
    display: flex;
    justify-content: center;
    margin-left: 40px;
  }
  ${HeaderButton} img {
    top: 55%;
    position: absolute;
    max-width: 112px;
    border-radius: 15px;
    width: 100%;
    transition: transform 0.3s ease, scale 0.3s ease;

    &:hover {
      transform: translateX(10px) scale(1.1);
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <NavBar />
      <MiddleContainer>
        <img src={logo} alt="Logo" />
        <HeaderButton>
          <img src={arrow} alt="Logo" />
        </HeaderButton>
      </MiddleContainer>
      <BgImage />
    </Container>
  );
}
