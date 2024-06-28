import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;
const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff5ee;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff5ee;
  min-height: 100px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #e65c00;
  }
`;

const moveAndDisappear = keyframes`
  0% {
    left: 50%;
    opacity: 1;
  }
  50% {
    left: 80%;
    opacity: 1;
  }
  100% {
    left: 80%;
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 48px;
  margin-bottom: 20px;
`;

const VerticalBar = styled.div`
  font-size: 32px;
  color: #ff6600;
  position: absolute;
  animation: ${moveAndDisappear} 2s forwards;
`;

const TitleText = styled.h1`
  color: #ff6600;
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 0;
  left: 80%;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 1s forwards 2s;
`;

const AnimatedTitle = () => {
  const [showBar, setShowBar] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBar(true), 100);
    setTimeout(() => setShowText(true), 2000);
  }, []);

  return (
    <TitleContainer>
      {showBar && <VerticalBar>|</VerticalBar>}
      {showText && <TitleText>Us.</TitleText>}
    </TitleContainer>
  );
};

const ContactForm = () => {
  return (
    <>
      <FormContainer>
        <Title>*For Demonstrative Purposes Only.</Title>
        <AnimatedTitle />
        <Form>
          <InputGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Leave a comment..."
              required
            />
          </InputGroup>
          <SubmitButton type="submit">
            <span>➤</span>
          </SubmitButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default ContactForm;
