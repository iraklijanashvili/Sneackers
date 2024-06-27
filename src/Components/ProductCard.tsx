import React from "react";
import styled from "styled-components";

export interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, scale 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const PriceActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const BuyButton = styled.button`
  background-color: #ff7d19;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5500;
  }
`;
const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => (
  <Card>
    <ProductImage src={image} alt="Product" />
    <ProductInfo>
      <ProductName>{name}</ProductName>
      <PriceActionContainer>
        <Price>{price}</Price>
        <BuyButton>Buy Now</BuyButton>
      </PriceActionContainer>
    </ProductInfo>
  </Card>
);
export default ProductCard;
