import styled from "styled-components";
import logo from "./assets/logo.svg";
import searchIcon from "./assets/searchIcon.svg";
import cartIcon from "./assets/cartIcon.svg";
import heartIcon from "./assets/heartIcon.svg";
import userIcon from "./assets/userIcon.svg";
import menuIcon from "./assets/menuIcon.svg";
import iconClose from "./assets/iconClose.svg";
import { useState } from "react";

const CenterFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 16px 15px;
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

const MenuUl = styled.ul<MenuUlProps>`
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

const IconContainer = styled(MenuUl)`
  margin-top: 5px;
`;

interface marginBottomProps {
  marginBottom?: string;
}

const InputForm = styled.input<marginBottomProps>`
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
const HeaderButtonBorrder = styled(HeaderButton)`
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
    width: 0;
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

const ToggleBtn = styled(HeaderButton)`
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

const CloseButton = styled(HeaderButton)`
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

  const handleToggleBtn = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <CenterFlex>
        <HeaderButton>
          <img src={logo} alt="Logo" />
        </HeaderButton>
        <MenuUl>
          <LiContainer>
            <HeaderButtonBorrder>
              <p>Collections</p>
            </HeaderButtonBorrder>
          </LiContainer>
          <LiContainer>
            <HeaderButtonBorrder>
              <p>Men</p>
            </HeaderButtonBorrder>
          </LiContainer>
          <LiContainer>
            <HeaderButtonBorrder>
              <p>Women</p>
            </HeaderButtonBorrder>
          </LiContainer>
          <LiContainer>
            <HeaderButtonBorrder>
              <p>About</p>
            </HeaderButtonBorrder>
          </LiContainer>
          <LiContainer>
            <HeaderButtonBorrder>
              <p>Contact</p>
            </HeaderButtonBorrder>
          </LiContainer>
        </MenuUl>
        <SearchContainer>
          <InputForm type="email" placeholder="Search..." />
          <SearchBtn>
            <img src={searchIcon} alt="Search" />
          </SearchBtn>
        </SearchContainer>
        <ToggleBtn onClick={handleToggleBtn}>
          <img src={menuIcon} alt="Menu" />
        </ToggleBtn>
        <IconContainer>
          <HeaderButton>
            <LiContainer>
              <li>
                <Icon src={cartIcon} alt="Cart" />
              </li>
            </LiContainer>
          </HeaderButton>
          <HeaderButton>
            <LiContainer>
              <li>
                <Icon src={heartIcon} alt="Heart" />
              </li>
            </LiContainer>
          </HeaderButton>
          <HeaderButton>
            <LiContainer>
              <li>
                <Icon width="25px" height="25px" src={userIcon} alt="" />
              </li>
            </LiContainer>
          </HeaderButton>
        </IconContainer>
        {menuOpen && (
          <MenuResponsive>
            <CloseButton onClick={handleToggleBtn}>
              <img src={iconClose} alt="Close" />
            </CloseButton>
            <MenuResponsiveContainer>
              <LiContainer>
                <HeaderButtonBorrder>
                  <p>Collections</p>
                </HeaderButtonBorrder>
              </LiContainer>
              <LiContainer>
                <HeaderButtonBorrder>
                  <p>Men</p>
                </HeaderButtonBorrder>
              </LiContainer>
              <LiContainer>
                <HeaderButtonBorrder>
                  <p>Women</p>
                </HeaderButtonBorrder>
              </LiContainer>
              <LiContainer>
                <HeaderButtonBorrder>
                  <p>About</p>
                </HeaderButtonBorrder>
              </LiContainer>
              <LiContainer>
                <HeaderButtonBorrder>
                  <p>Contact</p>
                </HeaderButtonBorrder>
              </LiContainer>
              <HeaderButton>
                <LiContainer padding="30px 0">
                  <li>
                    <Icon width="45px" height="45px" src={cartIcon} alt="" />
                  </li>
                </LiContainer>
              </HeaderButton>
              <HeaderButton>
                <LiContainer padding="20px 0">
                  <li>
                    <Icon width="45px" height="45px" src={heartIcon} alt="" />
                  </li>
                </LiContainer>
              </HeaderButton>
              <HeaderButton>
                <LiContainer padding="20px 0">
                  <li>
                    <Icon width="45px" height="45px" src={userIcon} alt="" />
                  </li>
                </LiContainer>
              </HeaderButton>
            </MenuResponsiveContainer>
          </MenuResponsive>
        )}
      </CenterFlex>
      <BorderBottom />
    </div>
  );
}
