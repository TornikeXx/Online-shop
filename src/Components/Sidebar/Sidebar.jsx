import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/Images/icons8-huawei-logo-64.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGem,
  faCircleUser,
  faShop,
  faChartPie,
  faCircleDollarToSlot,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SideContentDiv>
        <Img src={Image1} alt="" />
        <ButtonsDiv>
          <Btn>
            <FontAwesomeIcon icon={faHouse} size="xl" />
            <P>Home</P>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faGem} size="xl" />
            <P>Products</P>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
            <P>Customers</P>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faShop} size="xl" />
            <P>Shop</P>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faChartPie} size="xl" />
            <P>Income</P>
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faCircleDollarToSlot} size="xl" />
            <P>Promote</P>
          </Btn>
        </ButtonsDiv>
        <Footer>
          <hr />
          <FooterConetent>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <FooterText>Help & getting started</FooterText>
          </FooterConetent>
        </Footer>
      </SideContentDiv>
    </SidebarDiv>
  );
};

const SidebarDiv = styled.div`
  background-color: white;

  position: relative;
`;
const SideContentDiv = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`;
const Img = styled.img`
  padding-bottom: 48px;
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;
const Btn = styled.button`
  padding-left: 18px;
  display: flex;
  border: 0px;
  background-color: white;
  align-items: center;
  color: #a9a9a9;
  flex-grow: 1;
  &:hover {
    background-color: #e0e0eb;
    color: black;
    border-radius: 15px;
  }
`;
const P = styled.p`
  margin-left: 8px;
  font-size: 18px;
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: -webkit-fill-available;
  margin-right: 16px;
`;
const FooterConetent = styled.div`
  color: #a9a9a9;
  display: flex;
  align-items: center;
`;
const FooterText = styled.p`
  margin-left: 8px;
`;

export default Sidebar;
