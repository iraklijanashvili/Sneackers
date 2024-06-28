import styled from "styled-components";
import { Container } from "./Home";

const CartContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 30px 50px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 24px;
  color: #666;
  text-align: center;
  margin-top: 150px;
  font-weight: 600;
`;

const Cart = () => {
  const isCartEmpty = true; // This would typically be determined by your app's state

  return (
    <Container>
      <CartContainer>
        <Title>Your Cart</Title>
        {isCartEmpty ? (
          <EmptyCartMessage>Your Cart is Empty.</EmptyCartMessage>
        ) : // Here you would render cart items if the cart wasn't empty
        null}
      </CartContainer>
    </Container>
  );
};

export default Cart;
