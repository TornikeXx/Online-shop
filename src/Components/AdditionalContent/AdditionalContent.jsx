import React from "react";
import styled from "styled-components";
import Image1 from "../../Assets/Images/icons8-bag-48.png";
import Image2 from "../../Assets/Images/Ellipse 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare, faCheck } from "@fortawesome/free-solid-svg-icons";

const AdditionalContent = () => {
  return (
    <PageWrapper>
      <ProductsPage>
        <H3>Populard products</H3>
        <Heading>
          <P>Products</P>
          <P>Earning</P>
        </Heading>
        <hr />
        <PricesPage>
          <PricesCard>
            <Items>
              <img src={Image1} alt="" />
              <ItemsNames>
                <Pbold>Crypter-NFT</Pbold>
                <Pbold>UI kit</Pbold>
              </ItemsNames>
            </Items>
            <div>
              <Pbold>$2,453.80</Pbold>
              <ActiveStatus>Active</ActiveStatus>
            </div>
          </PricesCard>
          <PricesCard>
            <Items>
              <img src={Image1} alt="" />
              <ItemsNames>
                <Pbold>Crypter-NFT</Pbold>
                <Pbold>UI kit</Pbold>
              </ItemsNames>
            </Items>
            <div>
              <Pbold>$2,453.80</Pbold>
              <ActiveStatus>Active</ActiveStatus>
            </div>
          </PricesCard>
          <PricesCard>
            <Items>
              <img src={Image1} alt="" />
              <ItemsNames>
                <Pbold>Crypter-NFT</Pbold>
                <Pbold>UI kit</Pbold>
              </ItemsNames>
            </Items>
            <div>
              <Pbold>$2,453.80</Pbold>
              <ActiveStatus>Active</ActiveStatus>
            </div>
          </PricesCard>
          <PricesCard>
            <Items>
              <img src={Image1} alt="" />
              <ItemsNames>
                <Pbold>Crypter-NFT</Pbold>
                <Pbold>UI kit</Pbold>
              </ItemsNames>
            </Items>
            <div>
              <Pbold>$2,453.80</Pbold>
              <ActiveStatus>Active</ActiveStatus>
            </div>
          </PricesCard>
          <ButtonDiv>
            <Button>
              <Pbold>All products</Pbold>
            </Button>
          </ButtonDiv>
        </PricesPage>
      </ProductsPage>
      <CommentsPage>
        <H3>Comments</H3>
        <Comments>
          <Comment>
            <img src={Image2} alt="" />
            <div>
              <UsersName>
                <P>
                  <Strong>Ethel</Strong> @ethel
                </P>
                <P>1h</P>
              </UsersName>
              <P>
                On <Strong>Smiles-3D icons</Strong>
              </P>
              <p>Great work!</p>
              <Reactions>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faShare} />
              </Reactions>
            </div>
          </Comment>
          <hr />
          <Comment>
            <img src={Image2} alt="" />
            <div>
              <UsersName>
                <P>
                  <Strong>Ethel</Strong> @ethel
                </P>
                <P>1h</P>
              </UsersName>
              <P>
                On <Strong>Smiles-3D icons</Strong>
              </P>
              <p>Great work!</p>
              <Reactions>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faShare} />
              </Reactions>
            </div>
          </Comment>
          <hr />
          <Comment>
            <img src={Image2} alt="" />
            <div>
              <UsersName>
                <P>
                  <Strong>Ethel</Strong> @ethel
                </P>
                <P>1h</P>
              </UsersName>
              <P>
                On <Strong>Smiles-3D icons</Strong>
              </P>
              <p>Great work!</p>
              <Reactions>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faShare} />
              </Reactions>
            </div>
          </Comment>
          <hr />
          <ButtonDiv>
            <ViewButton>
              <Pbold>View all</Pbold>
            </ViewButton>
          </ButtonDiv>
        </Comments>
      </CommentsPage>
      <RefundPage>
        <H3>Refund requests</H3>
        <RefundContext>
          <CircleButton>
            <FontAwesomeIcon icon={faCheck} />
          </CircleButton>
          <P>
            You have <Strong>52 open refund requests</Strong> to action. this
            includes <Strong>8 new requests.</Strong>
          </P>
        </RefundContext>
        <ButtonDiv>
          <Button>
            <Pbold>Review refund requests</Pbold>
          </Button>
        </ButtonDiv>
      </RefundPage>
    </PageWrapper>
  );
};

const CircleButton = styled.button`
  padding: 14px;
  border-radius: 50%;
  border: 0px;
  color: red;
  background-color: #f9aeae;
`;

const RefundPage = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin-top: 10px;
`;

const RefundContext = styled.div`
  margin-top: 16px;
  display: flex;
  font-size: smaller;
  gap: 5px;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const UsersName = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 150fr 1fr;
`;

const Reactions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentsPage = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 16px;
`;
const Comment = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  gap: 5px;
  font-size: smaller;
  align-items: flex-start;
`;

const Comments = styled.div``;

const PageWrapper = styled.div`
  margin-left: 10px;
  margin-right: 25px;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const ActiveStatus = styled.button`
  border-radius: 10px;
  border: 0px;
  background-color: #90ee90;
  color: green;
`;

const PricesCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;
const ItemsNames = styled.div``;
const Items = styled.div`
  display: flex;
  align-items: center;
`;
const PricesPage = styled.div`
  padding-top: 16px;
`;
const Pbold = styled.p`
  font-weight: 600;
  margin: 0px;
`;
const Heading = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`;
const ProductsPage = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;
const Button = styled.button`
  background-color: white;
  padding: 10px;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
`;
const ViewButton = styled(Button)`
  margin-top: 16px;
`;
const P = styled.p`
  color: #a9a9a9;
  margin: 0px;
`;
const H3 = styled.h3`
  margin: 0px;
`;
const Strong = styled.strong`
  color: black;
`;

export default AdditionalContent;
