import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const ProTtips = () => {
  return (
    <ProtipsPage>
      <H3>Pro tips</H3>
      <P>Need some ideas for the next product?</P>
      <ButtonsWrapper>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
        <ButtonContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCalendarDays} />
          </CircleButton>
          <div>
            <Pbold>Early acces</Pbold>
            <P>New</P>
          </div>
        </ButtonContext>
      </ButtonsWrapper>
    </ProtipsPage>
  );
};

const CircleButton = styled.button`
  padding: 16px;
  border-radius: 50%;
  border: 1px solid #a9a9a9;
  color: black;
  background-color: white;
`;

const ProtipsPage = styled.div`
  background-color: white;
  padding: 16px 16px 0px 16px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  margin-bottom: 16px;
  margin-top: 0px;
`;
const P = styled.p`
  color: #a9a9a9;
  margin-top: 0px;
  margin-bottom: 20px;
`;
const Pbold = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 150px;
  padding-bottom: 20px;
`;

const ButtonContext = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-grow: 1;
`;

export default ProTtips;
