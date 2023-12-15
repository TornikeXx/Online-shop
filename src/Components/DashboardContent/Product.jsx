import React from "react";
import styled from "styled-components";
import Bar from "../BarChart/Bar";

const Product = () => {
  return (
    <ProductsPage>
      <Header>
        <H3>Product views</H3>
        <Dropdown>
          <label htmlFor="Drop">Last 7 days</label>
          <Select name="dropdown" id="Drop"></Select>
        </Dropdown>
      </Header>
      <Bar />
    </ProductsPage>
  );
};

const ProductsPage = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  margin-top: 10px;
`;
const H3 = styled.h3`
  margin: 0px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Dropdown = styled.div`
  color: #a9a9a9;
  display: flex;
  border: 1px solid #a9a9a9;
  padding: 8px;
  border-radius: 10px;
`;
const Select = styled.select`
  border: 0px;
  color: #a9a9a9;
`;

export default Product;
