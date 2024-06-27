import React from "react";
import styled from "styled-components";
import ProductCard, { ProductCardProps } from "./ProductCard";
import NavBar from "../NavBar";

interface ProductListProps {
  title: string;
  products: ProductCardProps[];
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: grey;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 20px;
  font-family: "DM Sans", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ProductList: React.FC<ProductListProps> = ({ title, products }) => (
  <>
    <NavBar />
    <PageContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <CardContainer>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </CardContainer>
    </PageContainer>
  </>
);
export default ProductList;
