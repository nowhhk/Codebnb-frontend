import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Search from "./Search";

const Main = () => {
  return (
    <>
      <Nav />
      <MainWrapper>
        <Tab>
          <span>숙소</span>
          <span>장기 숙박</span>
          <span>체험</span>
          <span>온라인 체험</span>
        </Tab>
        <Search />
        <Paragraph>모두 함께 한다면, 이겨낼 수 있습니다.</Paragraph>
      </MainWrapper>
    </>
  );
};

export default Main;

//styled-components

const MainWrapper = styled.div`
  padding: 0px 80px;
  max-width: 1760px;
  margin: 0 auto;
`;

const Tab = styled.div`
  display: flex;
  margin: 30px 0 16px 0;
  span {
    margin-right: 23px;
  }
  span:nth-child(1) {
    border-bottom: solid 2px ${(props) => props.theme.color.black};
    padding-bottom: 6px;
  }
`;

const Paragraph = styled.p`
  font-size: 44px;
  background: linear-gradient(
    to right,
    rgb(146, 23, 77) 10%,
    rgb(228, 29, 92) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
