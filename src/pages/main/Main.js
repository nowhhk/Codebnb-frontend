import Footer from "../../components/Footer";
import MainItem from "./MainItem";
import Nav from "../../components/Nav";
import React from "react";
import Search from "./Search";
import styled from "styled-components";

const Main = () => {
  const list = items.map((item) => (
    <MainItem title={item.title} desc={item.desc} img={item.img} />
  ));

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
        <Paragraph>
          가까운 여행지, 에어비앤비와
          <br /> 탐험해보세요.
        </Paragraph>
        <List>{list}</List>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;

const items = [
  {
    title: "가까운 여행지",
    desc: "자동차로 금방 다녀올 수 잇는 근교 여행지에서 휴식을 즐기세요",
    img:
      "https://a0.muscache.com/im/pictures/5924e9ef-fc40-439e-966a-1c76a634152a.jpg?im_w=320",
  },
  {
    title: "온라인 체험",
    desc: "세계 각지의 호스트가 보여주는 특별한 세상",
    img:
      "https://a0.muscache.com/im/pictures/7ee8ad00-0480-4b75-843f-1d2e4c01dde6.jpg?im_w=320",
  },
  {
    title: "나만의 공간",
    desc:
      "일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
    img:
      "https://a0.muscache.com/im/pictures/f8ec8dab-f5a4-423b-a81c-201f450d329d.jpg?im_w=320",
  },
  {
    title: "장기 숙박",
    desc: "한 달 이상 장기 숙박할 숙소를 에어비앤비에서 찾아보세요.",
    img:
      "https://a0.muscache.com/im/pictures/99ff3081-68b9-4e2b-801f-0ab9767eaa81.jpg?im_w=320",
  },
];
//styled-components

const MainWrapper = styled.div`
  padding: 0px 80px;
  max-width: 1760px;
  /* min-width: 1000px; */
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    overflow-x: hidden;
    padding: 0px 50px;
  }
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
  line-height: 58px;
  margin-bottom: 60px;
`;

const List = styled.div`
  display: flex;
  margin-bottom: 70px;
  width: 100%;
  max-width: 1760px;
  min-width: 1000px;
`;
