import styled from "styled-components";
import logo from "./assets/logo.svg";
import mainImage from "./assets/mainImage.png";
import arrow from "./assets/arrow.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  font-family: "DM Sans", sans-serif;

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

  overflow-x: hidden;
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

const MiddleContainer = styled(Link)<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  text-decoration: none;
  border-bottom: ${({ active }) => (active ? "3px solid #ff7d19" : "none")};

  img:first-child {
    padding: 0px 30px;
    top: 15%;
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
    top: 45%;
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
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigation = (path: string) => {
    setActiveLink(path);
  };

  return (
    <Container>
      <MiddleContainer
        to="/collections"
        active={activeLink === "/collections"}
        onClick={() => handleNavigation("/collections")}
      >
        <img src={logo} alt="Logo" />
        <HeaderButton>
          <img src={arrow} alt="Arrow" />
        </HeaderButton>
      </MiddleContainer>
      <BgImage />
    </Container>
  );
}
