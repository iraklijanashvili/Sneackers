import React from "react";
import NavBar from "./NavBar";
import { Container } from "./Home";
import styled from "styled-components";
import webSiteImage from "./assets/webSiteImage.png";
import ReactOriginal from "./assets/reactOriginal.svg";
import TypescriptOriginal from "./assets/typescriptOriginal.svg";
import NextOriginal from "./assets/nextjsOriginal.svg";
import MyImage from "./assets/myImage.jpeg";
import Future from "./assets/future.svg";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  border: 2px solid black;
  height: 500px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const ProjectOverview = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 80px;
  display: flex;
  justify-content: start;
  align-items: start;

  p {
    margin-bottom: 15px;
    font-weight: 400;
  }
`;

const HeaderText = styled.p`
  color: hsl(26, 100%, 55%, 100%);
  font-size: 28px;
  line-height: 28px;
  font-weight: 800;
  padding: 0px 80px;
`;

const StyledImage = styled.img`
  max-width: 448px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTechStackImage = styled.img`
  margin-right: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(1px) scale(1.1);
  }
`;

const StyledMyImage = styled.img`
  max-width: 448px;
  max-height: 328px;
  border-radius: 20px;
  width: 100%;
`;
interface SectionComponentProps {
  title: string;
  description: string;
  backgroundColor?: string;
  images: { src: string; alt: string; component?: React.ElementType }[];
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  title,
  description,
  images,
  backgroundColor,
}) => (
  <FlexContainer style={{ backgroundColor }}>
    <TextContainer>
      <HeaderText>{title}</HeaderText>
      <ProjectOverview>
        <p>{description}</p>
      </ProjectOverview>
    </TextContainer>
    <StyledImageContainer>
      {images.map((image, index) => {
        const ImageComponent = image.component || StyledImage;
        return <ImageComponent key={index} src={image.src} alt={image.alt} />;
      })}
    </StyledImageContainer>
  </FlexContainer>
);

const About: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <SectionComponent
        title="Project Overview"
        description="Originally conceived as a challenge to design a singular product page, this project quickly evolved into a comprehensive showcase of creative prowess and technical skill. Leveraging Next.js, I transformed the concept into a dynamic pseudo e-commerce platform. From seamless navigation to a robust product database and intuitive cart system, every aspect was meticulously crafted to deliver an immersive user experience. Fueled by a passion for creativity and a background in animation, I infused the platform with captivating visuals and interactive elements."
        images={[{ src: webSiteImage, alt: "Project Overview Image" }]}
      />
      <SectionComponent
        backgroundColor="rgb(255, 247, 237)"
        title="The Tech' Stack"
        description="The Tech Stack, featuring Next.js, TypeScript, Framer Motion, Tailwind CSS, and Zustand, enables efficient frontend development with rapid iteration, robust type safety, fluid animations, and streamlined styling. Additional dependencies include Heroicons and Simplex Noise for enhanced iconography and procedural generation, empowering us to create immersive web experiences effortlessly."
        images={[
          {
            src: ReactOriginal,
            alt: "React Logo",
            component: StyledTechStackImage,
          },
          {
            src: NextOriginal,
            alt: "Next.js Logo",
            component: StyledTechStackImage,
          },
          {
            src: TypescriptOriginal,
            alt: "Ts Logo",
            component: StyledTechStackImage,
          },
        ]}
      />
      <SectionComponent
        backgroundColor="#fde68a"
        title="A Little About Me"
        description="Self-taught and certified in modern front-end frameworks, I bring a unique blend of problem-solving, technical proficiency, and creative flair to collaborative teams. My diverse skill set enriches projects with professionalism, innovation, and a touch of creativity, enhancing team ambitions and driving success."
        images={[
          {
            src: MyImage,
            alt: "Project Overview Image",
            component: StyledMyImage,
          },
        ]}
      />
      <SectionComponent
        title="Future Considerations"
        description="Looking ahead, as i continue to evolve my skills im eager to build upon this platform and incorporate personalised user accounts with authentication and live order tracking to reflect a realistic experience of e-commerce applications. Following this, I would love to utilise analytical tools to optimise performance and gather insight into user behaviour, product performance and platform usage as seen in many industry standard tools."
        images={[{ src: Future, alt: "Project Overview Image" }]}
      />
    </Container>
  );
};

export default About;
