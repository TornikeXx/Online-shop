import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const GetCustomers = () => {
  return (
    <CustomersPage>
      <H3>Get more customers!</H3>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed rem
        commodi aut eius fugit enim eaque! Dolores, vel! Rem voluptate
        consequatur
      </P>
      <ButtonsDiv>
        <Button>
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: "#9da1aa" }}
            size="lg"
          />
          <Pbold>Facebook</Pbold>
        </Button>
        <Button>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#9da1aa" }}
            size="lg"
          />
          <Pbold>Instagram</Pbold>
        </Button>
        <Button>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#9da1aa" }}
            size="lg"
          />
          <Pbold>Twitter</Pbold>
        </Button>
      </ButtonsDiv>
    </CustomersPage>
  );
};

const CustomersPage = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  background-color: white;
  padding: 0px 30px;
  border: 1px solid #a9a9a9;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const H3 = styled.h3`
  margin: 0px;
`;
const P = styled.p`
  color: #a9a9a9;
`;
const Pbold = styled.p`
  font-weight: 600;
`;

export default GetCustomers;
