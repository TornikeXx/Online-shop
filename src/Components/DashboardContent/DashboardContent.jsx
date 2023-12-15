import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/Images/icons8-bag-48.png";
import Image2 from "../../Assets/Images/Ellipse 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import ProTtips from "./ProTtips";
import GetCustomers from "./GetCustomers";

const DashboardContent = () => {
  return (
    <Main>
      <ContextDiv>
        <Overview>
          <H3>Overview</H3>
          <Dropdown>
            <label htmlFor="Drop">All time</label>
            <Select name="dropdown" id="Drop"></Select>
          </Dropdown>
        </Overview>
        <IncomeWrapper>
          <CustomersCard>
            <CardContext>
              <img src={Image1} alt="" />
              <div>
                <P>Customers</P>
                <h1>1024</h1>
              </div>
            </CardContext>
            <StockButton>
              <FontAwesomeIcon icon={faArrowDown} />
              37.8%
            </StockButton>
          </CustomersCard>
          <IncomeCard>
            <CardContext>
              <img src={Image1} alt="" />
              <div>
                <P>Income</P>
                <h1>256k</h1>
              </div>
            </CardContext>
            <StockButtonstyled>
              <FontAwesomeIcon icon={faArrowUp} />
              37.8%
            </StockButtonstyled>
          </IncomeCard>
        </IncomeWrapper>
        <Text>
          <P>
            Welcome <Strong>857 customers</Strong> with a personal message
          </P>
          <Button>Send message</Button>
        </Text>
        <Users>
          <User>
            <img src={Image2} alt="" />
            Gladyce
          </User>
          <User>
            <img src={Image2} alt="" />
            Gladyce
          </User>
          <User>
            <img src={Image2} alt="" />
            Gladyce
          </User>
          <User>
            <CircleButton>
              <FontAwesomeIcon icon={faArrowRight} />
            </CircleButton>
            View all
          </User>
        </Users>
      </ContextDiv>
      <Product />
      <ProTtips />
      <GetCustomers />
    </Main>
  );
};

const User = styled.div`
  display: grid;
  justify-items: center;
`;

const CircleButton = styled.button`
  padding: 16px;
  border-radius: 50%;
  border: 0px;
  color: #a9a9a9;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Strong = styled.strong`
  color: black;
`;
const Users = styled.div`
  display: flex;
  padding-bottom: 16px;
  margin-top: 40px;
  justify-content: space-evenly;
`;

const CustomersCard = styled.div`
  background-color: white;
  padding: 8px;
  display: flex;
  gap: 10px;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 10px;
`;

const IncomeCard = styled(CustomersCard)`
  background-color: #e0e0eb;
`;
const StockButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background-color: #f9aeae;
  color: red;
  display: flex;
  gap: 5px;
`;
const Button = styled.button`
  border: 1px solid #a9a9a9;
  padding: 8px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  background-color: white;
`;
const StockButtonstyled = styled(StockButton)`
  background-color: #90ee90;
  color: green;
`;

const CardContext = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const IncomeWrapper = styled.div`
  background-color: #e0e0eb;
  margin-top: 16px;
  padding: 10px;
  display: flex;
  gap: 5px;
  border-radius: 10px;
  margin-bottom: 16px;
`;
const Main = styled.div`
  margin-left: 25px;
`;
const ContextDiv = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H3 = styled.h3`
  margin: 0px;
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

const P = styled.p`
  color: #a9a9a9;
  margin: 0px;
`;

export default DashboardContent;
