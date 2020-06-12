import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleList from "./SingleList";
import ListFilter from "./ListFilter";
import Pagination from "./Pagination";
import MapContainer from "./map/MapContainer";
import MapView from "./map/MapView";

const List = () => {
  // const [data, setData] = useState([]);

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
            <div style={{ width: 40, height: 40 }}>
              <img
                src="https://a0.muscache.com/airbnb/static/packages/icon-uc-alarm.e0a2b02f.gif"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <P style={{ padding: "0 1.5em" }}>
              예약에 앞서 여행 제한 사항을 확인하세요.에어비앤비 커뮤니티의
              건강과 안전이 최우선입니다. 정부 지침을 준수하고 꼭 필요한
              경우에만 여행하실 것을 부탁드립니다.자세히 알아보기
            </P>
          </Alert>
          <SingleList />
        </Listings>
        <Pagination>Pagination</Pagination>
      </ListWrapper>
      <MapWrapper>
        {/* <MapContainer /> */}
        <MapView />
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
`;

const MapWrapper = styled.div`
  width: calc(100vw - 840px);
  height: 100vh;
  background-color: gainsboro;
  z-index: 0;
`;

export default List;
