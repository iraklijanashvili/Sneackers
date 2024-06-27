import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import webSiteImage from "./assets/webSiteImage.png";
import ReactOriginal from "./assets/reactOriginal.svg";
import TypescriptOriginal from "./assets/typescriptOriginal.svg";
import NextOriginal from "./assets/nextjsOriginal.svg";
import MyImage from "./assets/myImage.jpeg";
import Future from "./assets/future.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  font-family: "DM Sans", sans-serif;
  scroll-snap-type: y mandatory;

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

const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Changed from center to flex-start
  align-items: center;
  transition: opacity 0.5s ease-in-out;
  padding: 100px 20px 20px; // Increased top padding
  box-sizing: border-box;
  margin-top: 0px; // Removed margin-top

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 120px; // Increased top padding for larger screens
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 100%;
  margin-bottom: 20px;
  width: 100%; // Added to ensure full width on small screens
  padding: 0px 30px;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
  }
`;

const HeaderText = styled.h2`
  color: hsl(26, 100%, 55%, 100%);
  font-size: 22px; // Slightly reduced font size for very small screens
  line-height: 26px;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;

const ProjectOverview = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #333;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 448px;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledTechStackImage = styled.img`
  margin: 10px;
  transition: transform 0.3s ease;
  max-width: 80px;

  &:hover {
    transform: translateX(1px) scale(1.1);
  }

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

const StyledMyImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  height: auto;

  @media (min-width: 768px) {
    max-width: 448px;
    max-height: 328px;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
      <Section style={{ backgroundColor: "white" }}>
        <TextContainer>
          <HeaderText>Project Overview</HeaderText>
          <ProjectOverview>
            Originally conceived as a challenge to design a singular product
            page, this project quickly evolved into a comprehensive showcase of
            creative prowess and technical skill. Leveraging Next.js, I
            transformed the concept into a dynamic pseudo e-commerce platform.
            From seamless navigation to a robust product database and intuitive
            cart system, every aspect was meticulously crafted to deliver an
            immersive user experience. Fueled by a passion for creativity and a
            background in animation, I infused the platform with captivating
            visuals and interactive elements.
          </ProjectOverview>
        </TextContainer>
        <StyledImageContainer>
          <StyledImage src={webSiteImage} alt="Project Overview Image" />
        </StyledImageContainer>
      </Section>

      <Section style={{ backgroundColor: "rgb(255, 247, 237)" }}>
        <TextContainer>
          <HeaderText>The Tech' Stack</HeaderText>
          <ProjectOverview>
            The Tech Stack, featuring Next.js, TypeScript, Framer Motion,
            Tailwind CSS, and Zustand, enables efficient frontend development
            with rapid iteration, robust type safety, fluid animations, and
            streamlined styling. Additional dependencies include Heroicons and
            Simplex Noise for enhanced iconography and procedural generation,
            empowering us to create immersive web experiences effortlessly.
          </ProjectOverview>
        </TextContainer>
        <StyledImageContainer>
          <StyledTechStackImage src={ReactOriginal} alt="React Logo" />
          <StyledTechStackImage src={NextOriginal} alt="Next.js Logo" />
          <StyledTechStackImage src={TypescriptOriginal} alt="Ts Logo" />
        </StyledImageContainer>
      </Section>

      <Section style={{ backgroundColor: "#fde68a" }}>
        <TextContainer>
          <HeaderText>A Little About Me</HeaderText>
          <ProjectOverview>
            Self-taught and certified in modern front-end frameworks, I bring a
            unique blend of problem-solving, technical proficiency, and creative
            flair to collaborative teams. My diverse skill set enriches projects
            with professionalism, innovation, and a touch of creativity,
            enhancing team ambitions and driving success.
          </ProjectOverview>
        </TextContainer>
        <StyledImageContainer>
          <StyledMyImage src={MyImage} alt="My Image" />
        </StyledImageContainer>
      </Section>

      <Section style={{ backgroundColor: "white" }}>
        <TextContainer>
          <HeaderText>Future Considerations</HeaderText>
          <ProjectOverview>
            Looking ahead, as I continue to evolve my skills I'm eager to build
            upon this platform and incorporate personalised user accounts with
            authentication and live order tracking to reflect a realistic
            experience of e-commerce applications. Following this, I would love
            to utilise analytical tools to optimise performance and gather
            insight into user behaviour, product performance and platform usage
            as seen in many industry standard tools.
          </ProjectOverview>
        </TextContainer>
        <StyledImageContainer>
          <StyledImage src={Future} alt="Future Image" />
        </StyledImageContainer>
      </Section>
    </Container>
  );
};

export default About;
