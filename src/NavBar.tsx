import styled from "styled-components";
import logo from "./assets/logo.svg";
import searchIcon from "./assets/searchIcon.svg";
import cartIcon from "./assets/cartIcon.svg";
import heartIcon from "./assets/heartIcon.svg";
import userIcon from "./assets/userIcon.svg";
import menuIcon from "./assets/menuIcon.svg";
import iconClose from "./assets/iconClose.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 28px 15px;
  background-color: #ffffff;
`;

const BorderBottom = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(216, 211, 211, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  margin-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      43deg,
      rgba(255, 255, 255, 1) 10%,
      rgba(216, 211, 211, 1) 30%,
      rgba(216, 211, 211, 1) 50%,
      rgba(224, 220, 220, 1) 60%,
      rgba(255, 255, 255, 1) 90%
    );
  }
`;

interface MenuUlProps {
  padding?: string;
}

const MenuList = styled.ul<MenuUlProps>`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.padding || "0"};
  align-items: center;
  li {
    color: grey;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const IconContainer = styled(MenuList)`
  margin-top: 5px;
`;

interface marginBottomProps {
  marginBottom?: string;
}

const SearchInput = styled.input<marginBottomProps>`
  width: 70%;
  height: 24px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
  border: 2px solid grey;
  background: linear-gradient(
    135deg,
    rgba(255, 237, 224, 1) 0%,
    rgba(255, 237, 224, 1) 50%,
    rgba(255, 190, 140, 1) 100%
  );
  border: none;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 15px 4px;

  ::placeholder {
    color: #b6aeae;
  }

  &:focus {
    border-color: black;
    outline: none;
  }
`;

const SearchBtn = styled.button`
  border: 0px;
  background: linear-gradient(
    135deg,
    rgba(235, 194, 163, 1) 0%,
    rgba(245, 140, 60, 1) 50%,
    rgba(255, 125, 26, 1) 100%
  );
  height: 24px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 0px;
  cursor: pointer;
  outline: none;
  p {
    color: grey;
  }

  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
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
const NavButtonBorrder = styled(NavButton)<{ active?: boolean }>`
  position: relative;
  p {
    color: grey;
    font-family: "Kumbh Sans", sans-serif;
    font-optical-sizing: auto;
    margin: 5px;
  }

  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 3px;
    display: block;
    background: #ff7d19;
    transition: width 250ms ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover::after {
    width: 100%;
  }
`;

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

const Icon = styled.img<IconProps>`
  width: ${(props) => props.width || "25px"};
  height: ${(props) => props.height || "25px"};
  color: ${(props) => props.color || "red"};
  transition: transform 0.3s ease, scale 0.3s ease;

  &:hover {
    transform: translateX(1px) scale(1.1);
    filter: brightness(0) saturate(100%) invert(42%) sepia(100%) saturate(2000%)
      hue-rotate(3deg) brightness(100%) contrast(106%);
  }
`;

interface LiContainerProps {
  padding?: string;
}

const LiContainer = styled.div<LiContainerProps>`
  padding: ${(props) => props.padding || "0px 20px"};
`;

const ToggleBtn = styled(NavButton)`
  @media (min-width: 1025px) {
    display: none;
  }
`;

const MenuResponsive = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border: 2px solid green;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuResponsiveContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 2px solid black;
  height: 100vh;
  padding-top: 50px;

  p {
    padding: 10px 0;
    font-size: 30px;
  }
`;

const CloseButton = styled(NavButton)`
  position: fixed;
  top: 5%;
  right: 5%;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleBtn = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false); // Close the menu if it's open
  };

  return (
    <div>
      <NavContainer>
        <NavButton onClick={() => handleNavigation("/")}>
          <img src={logo} alt="Logo" />
        </NavButton>
        <MenuList>
          <LiContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/collections")}
              active={location.pathname === "/collections"}
            >
              <p>Collections</p>
            </NavButtonBorrder>
          </LiContainer>
          <LiContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/men")}
              active={location.pathname === "/men"}
            >
              <p>Men</p>
            </NavButtonBorrder>
          </LiContainer>
          <LiContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/women")}
              active={location.pathname === "/women"}
            >
              <p>Women</p>
            </NavButtonBorrder>
          </LiContainer>
          <LiContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/about")}
              active={location.pathname === "/about"}
            >
              <p>About</p>
            </NavButtonBorrder>
          </LiContainer>
          <LiContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/contact")}
              active={location.pathname === "/contact"}
            >
              <p>Contact</p>
            </NavButtonBorrder>
          </LiContainer>
        </MenuList>
        <IconContainer padding="0px">
          <LiContainer>
            <SearchContainer>
              <SearchInput placeholder="Search..." />
              <SearchBtn>
                <Icon src={searchIcon} />
              </SearchBtn>
            </SearchContainer>
          </LiContainer>
          <LiContainer>
            <NavButton onClick={() => handleNavigation("/cart")}>
              <Icon src={cartIcon} />
            </NavButton>
          </LiContainer>
          <LiContainer>
            <NavButton>
              <Icon src={heartIcon} />
            </NavButton>
          </LiContainer>
          <LiContainer>
            <NavButton>
              <Icon src={userIcon} />
            </NavButton>
          </LiContainer>
          <LiContainer>
            <ToggleBtn onClick={handleToggleBtn}>
              <Icon src={menuIcon} />
            </ToggleBtn>
          </LiContainer>
        </IconContainer>
      </NavContainer>
      {menuOpen && (
        <MenuResponsive>
          <CloseButton onClick={handleToggleBtn}>
            <Icon src={iconClose} />
          </CloseButton>
          <MenuResponsiveContainer>
            <NavButtonBorrder
              onClick={() => handleNavigation("/collections")}
              active={location.pathname === "/collections"}
            >
              <p>Collections</p>
            </NavButtonBorrder>
            <NavButtonBorrder
              onClick={() => handleNavigation("/men")}
              active={location.pathname === "/men"}
            >
              <p>Men</p>
            </NavButtonBorrder>
            <NavButtonBorrder
              onClick={() => handleNavigation("/women")}
              active={location.pathname === "/women"}
            >
              <p>Women</p>
            </NavButtonBorrder>
            <NavButtonBorrder
              onClick={() => handleNavigation("/about")}
              active={location.pathname === "/about"}
            >
              <p>About</p>
            </NavButtonBorrder>
            <NavButtonBorrder
              onClick={() => handleNavigation("/contact")}
              active={location.pathname === "/contact"}
            >
              <p>Contact</p>
            </NavButtonBorrder>
          </MenuResponsiveContainer>
        </MenuResponsive>
      )}
      <BorderBottom />
    </div>
  );
}
