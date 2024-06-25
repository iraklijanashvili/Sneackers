import styled from "styled-components";
import NavBar from "./NavBar";
import Product2 from "./assets/productImage2.png";
import Product3 from "./assets/productImage3.png";
import Product4 from "./assets/productImage4.jpg";
import { Container } from "./Home";
const Dflex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-family: "DM Sans", sans-serif;
  width: 100%;
`;

const ContaineOne = styled.div`
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
  img {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 300px;
    width: 40%;
    object-fit: cover;
  }
  div {
    color: white;
    padding: 0px 5px;
  }
  div p {
    font-size: 36px;
    font-weight: 40px;
  }
  div h1 {
    font-weight: bold;
    font-size: 46px;
  }
  div h1 span {
    color: #ff7d19;
  }
  div h2 {
    margin-top: 10px;
  }
  div h2 span {
    border-bottom: 1px solid white;
  }
`;
const ContainerTwo = styled.div`
  max-width: 400px;
  width: 32%;
  border-radius: 20px;
  height: 300px;
  position: relative;

  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }

  div {
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
  }

  span {
    color: white;
    font-size: 20px;
    display: block;
    font-weight: lighter;
    margin-top: 10px;
  }
`;

const ContainerThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: "DM Sans", sans-serif;

  > div {
    display: flex;
    border: 5px solid green;
    max-width: 1320px;
    background-color: #ff7d19;
    height: 750px;
    margin-top: 20px;
    border-radius: 20px;
    background-image: radial-gradient(
      88% 100% at top,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    width: 100%;
  }
  > div > div:nth-child(1) {
    width: 40%;
    background-color: green;
    display: flex;
    justify-content: start;
    align-items: end;
    position: relative;
  }
  > div > div img {
    background-color: green;
    width: 50%;
    height: 50%;
    border-top-right-radius: 20px;
    position: absolute;
    bottom: -10%;
    transform: translateX(-50%, -50%);
  }
  > div > div:nth-child(2) {
    width: 60%;
    background-color: red;
  }
`;

export default function Collections() {
  return (
    <Container>
      <NavBar />
      <Dflex>
        <ContaineOne>
          <div>
            <p>Introducing</p>
            <h1>
              EmberStride <span>MAX.</span>
            </h1>
            <h2>
              Now with <span>Maximum</span> Style.
            </h2>
          </div>
          <img src={Product2} alt="" />
        </ContaineOne>

        <ContainerTwo>
          <img src={Product3} alt="" />
          <div>
            CitrusStride <span>Classically Different.</span>
          </div>
        </ContainerTwo>
      </Dflex>
      <ContainerThree>
        <div>
          <div>
            <img src={Product4} alt="" />
          </div>
          <div>66%</div>
        </div>
      </ContainerThree>
    </Container>
  );
}
