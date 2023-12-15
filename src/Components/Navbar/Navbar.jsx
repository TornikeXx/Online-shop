import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage, faBell } from "@fortawesome/free-regular-svg-icons";
import Image1 from "../../Assets//Images/Ellipse 2.png";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Search>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#535b6a" }}
          />
          <Input type="search" placeholder="Search or type a command..." />
        </Search>
        <ProfileDiv>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </Button>
          <FontAwesomeIcon
            icon={faMessage}
            style={{ color: "#535b6a" }}
            size="lg"
          />
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            style={{ color: "#535b6a" }}
          />
          <img src={Image1} alt="" />
        </ProfileDiv>
      </NavbarContent>
    </NavbarWrapper>
  );
};

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Button = styled.button`
  padding: 10px 8px;
  color: white;
  background-color: #537fe7;
  border: 0px;
  border-radius: 10px;
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  background-color: #e0e0eb;
  border: 0px;
  width: 250px;
`;

const NavbarWrapper = styled.div`
  background-color: white;
  margin-left: 2px;
`;
const NavbarContent = styled.div`
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
`;
const Search = styled.div`
  background-color: #e0e0eb;
  padding: 10px 8px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default Navbar;
