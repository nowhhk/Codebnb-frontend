import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleList from "./SingleList";
import ListFilter from "./ListFilter";
import Pagination from "./Pagination";
import MapView from "./map/MapView2";

// import MapView from "./map/MapView";

const List = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://10.58.5.55:8000/api/monthly", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     // .then((res) => console.log(res));
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(
  //     "http://10.58.5.61:8000/room/list?location=서울&property_type=아파트&languages=한국어",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res.rooms));
  //   // .then((res) => {
  //   //   setData(res.rooms);
  //   // });
  // }, []);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) => {
        setData(res.rooms);
      });
  }, []);
  return (
    <Container>
      <ListWrapper>
        <Header>
          <P>300개 이상의 숙소 · 12월 3일 - 12월 5일 · 게스트 2명</P>
          <Header1>제주도의 숙소</Header1>
          <ListFilter />
        </Header>
        <Listings>
          <Alert>
            <div>
              <img
                src="https://a0.muscache.com/airbnb/static/packages/icon-uc-alarm.e0a2b02f.gif"
                alt=""
              />
            </div>
            <p>
              예약에 앞서 여행 제한 사항을 확인하세요.에어비앤비 커뮤니티의
              건강과 안전이 최우선입니다. 정부 지침을 준수하고 꼭 필요한
              경우에만 여행하실 것을 부탁드립니다.자세히 알아보기
            </p>
          </Alert>
          <SingleList rooms={data} />
          <Pagination>Pagination</Pagination>
        </Listings>
      </ListWrapper>
      <MapWrapper>
        <MapView rooms={data} />
      </MapWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const ListWrapper = styled.div`
  width: 840px;
  height: 100vh;
  padding: 2em 2em 0 1em;
  z-index: 1;
  overflow: scroll;
`;

const Header = styled.div``;

const P = styled.p`
  font-size: 0.875em;
  color: ${(props) => props.theme.color.black};
`;

const Header1 = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.color.black};
  margin: 0.25em 0;
`;

const Listings = styled.div`
  height: 600px;
  z-index: 0;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;

  div {
    width: 40;
    height: 40;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-size: 0.875em;
    color: ${(props) => props.theme.color.black};
    line-height: 1.125rem;
    padding: 0 1.5em;
  }
`;

const MapWrapper = styled.div`
  width: calc(100vw - 840px);
  height: 100vh;
  background-color: gainsboro;
  z-index: 0;
`;

export default List;
