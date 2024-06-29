import React from "react";
import styled from "styled-components";
import webSiteImage from "./assets/webSiteImage.png";
import ReactOriginal from "./assets/reactOriginal.svg";
import TypescriptOriginal from "./assets/typescriptOriginal.svg";
import NextOriginal from "./assets/nextjsOriginal.svg";
import MyImage from "./assets/myImage.jpeg";
import Future from "./assets/future.svg";

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: opacity 0.5s ease-in-out;
  padding: 100px 20px 20px;
  box-sizing: border-box;
  margin-top: 0px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 120px;
  }

  @media (min-width: 1024px) {
    min-height: 80vh;
    padding-top: 80px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 100%;
  margin-bottom: 20px;
  width: 100%;
  padding: 0px 30px;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    max-width: 45%;
  }
`;

const HeaderText = styled.h2`
  color: hsl(26, 100%, 55%, 100%);
  font-size: 22px;
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

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 24px;
    margin-top: 0;
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

  @media (min-width: 1024px) {
    max-width: 400px;
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

  @media (min-width: 1024px) {
    max-width: 400px;
    max-height: 300px;
  }
`;

const About: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default About;
