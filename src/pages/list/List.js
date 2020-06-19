import React, { useState, useEffect } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import { API } from "../../config";
import SingleList from "./SingleList";
import ListFilter from "./ListFilter";
import MapView from "./map/MapView2";
import JejuMap from "./map/MapJeju";
import styled from "styled-components";

const List = (props) => {
  const queryString = require("query-string");
  const [data, setData] = useState([]);

  ///// 쿼리값 /////
  const parsed = queryString.parse(props.location.search);

  ///// 숙소유형 /////
  const [placeOpen, setPlaceOpen] = useState(false);
  const [place, setPlace] = useState([]);
  const [placeQuery, setPlaceQuery] = useState("");

  ///// 요금 /////
  const [priceOpen, setPriceOpen] = useState(false);
  const [price, setPrice] = useState([]);
  const [priceQuery, setPriceQuery] = useState("");

  ///// 필터추가 /////
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [filtersQuery, setFiltersQuery] = useState("");

  const [property, setProperty] = useState([]);
  const [propertyQuery, setPropertyQuery] = useState("");

  const [language, setLanguage] = useState([]);
  const [languageQuery, setLanguageQuery] = useState("");

  ///// 페이지네이션 /////
  const limit = 10;
  const [offset, setOffset] = useState(0);

  ///// 맵 마커 /////
  const [marker, setMarker] = useState("");

  /////////////////////// fetch data  //////////////////////
  //component did update `${shortstay}/room/list${this.props.location.search}&${place_query}&${amenities_query}&${property_query}&${language_query}`

  useEffect(() => {
    let location = props.location.search;
    getData(location, 0);
  }, []);

  const handlePage = (to) => {
    if (to === "prev") {
      if (offset === 0) return;
      setOffset(offset - limit);
      let prevOffset = offset - limit;
      getData(props.location.search, prevOffset);
    } else if (to === "next") {
      console.log("next clicked");
      setOffset(offset + limit);
      let nextOffset = offset + limit;
      getData(props.location.search, nextOffset);
    }
  };

  const getData = (location, offsetNum) => {
    // fetch("/data/data_seoul.json")
    fetch(
      // `${API}/room/list${location}&${placeQuery}&${filtersQuery}&limit=${limit}&offset=${offsetNum}`,
      `${API}/room/list${location}&${placeQuery}&limit=${limit}&offset=${offsetNum}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.rooms);
        // console.log(res.rooms);
      });
  };

  ///// 숙소유형 /////

  // toggle dropdown
  const TogglePlace = () => {
    setPlaceOpen(!placeOpen);
  };

  // save user selection
  const savePlaceType = (e) => {
    const { value } = e.target;
    let selected = [...place];
    if (selected.includes(value)) {
      selected = selected.filter((s) => s !== value);
    } else {
      selected = [...selected, value];
    }
    setPlace(selected);
  };

  const submitPlace = () => {
    const query = place.map((item) => {
      return `place_type=${item}`;
    });
    const placeQuery = query.join("&");
    setPlaceQuery(placeQuery);
    setPlace([]);
    setPlaceOpen(false);
  };

  console.log(placeQuery);
  ///// 편의시설 /////

  const ToggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const saveFilterType = (e) => {
    const { value } = e.target;
    let selected = [...filters];
    if (selected.includes(value)) {
      selected = selected.filter((s) => s !== value);
    } else {
      selected = [...selected, value];
    }
    setFilters(selected);
  };

  ///// 건물유형 /////

  const savePropertyType = (e) => {
    const { value } = e.target;
    let selected = [...property];
    if (selected.includes(value)) {
      selected = selected.filter((s) => s !== value);
    } else {
      selected = [...selected, value];
    }
    setProperty(selected);
  };

  ///// 호스트 언어 /////

  const saveLanguage = (e) => {
    const { value } = e.target;
    let selected = [...language];
    if (selected.includes(value)) {
      selected = selected.filter((s) => s !== value);
    } else {
      selected = [...selected, value];
    }
    setLanguage(selected);
  };

  const submitFilter = (e) => {
    e.preventDefault();

    const filtersQS = filters.map((item) => {
      return `amenities=${item}`;
    });
    const filtersQuery = filtersQS.join("&");
    setFiltersQuery(filtersQuery);
    setFilters([]);

    const propertyQS = property.map((item) => {
      return `property_type=${item}`;
    });
    const propertyQuery = propertyQS.join("&");
    setPropertyQuery(propertyQuery);
    setProperty([]);

    const languageQS = language.map((item) => {
      return `language=${item}`;
    });
    const languageQuery = languageQS.join("&");
    setLanguageQuery(languageQuery);
    setLanguage([]);

    setFilterOpen(false);
  };

  const clearFilter = (e) => {
    e.preventDefault();
    setFilters([]);
    setProperty([]);
    setLanguage([]);
  };

  ///// 요금 /////

  // toggle dropdown
  const TogglePrice = () => {
    setPriceOpen(!priceOpen);
  };

  const highlighted = (id) => {
    setMarker(id);
  };

  return (
    <Container>
      <ListWrapper>
        <header>
          <p>
            300개 이상의 숙소 · {parsed.checkin} - {parsed.checkout} · 게스트
            {parsed.adults}명
          </p>
          <h1>{parsed.location}의 숙소</h1>
        </header>
        <ListFilter
          rooms={data}
          placeOpen={placeOpen}
          TogglePlace={TogglePlace}
          savePlaceType={savePlaceType}
          submitPlace={submitPlace}
          priceOpen={priceOpen}
          TogglePrice={TogglePrice}
          filterOpen={filterOpen}
          ToggleFilter={ToggleFilter}
          saveFilterType={saveFilterType}
          submitFilter={submitFilter}
          savePropertyType={savePropertyType}
          saveLanguage={saveLanguage}
          clearFilter={clearFilter}
        />
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
          {/* <Link to={"./detail/${}"}> */}
          <SingleList rooms={data} highlighted={highlighted} parsed={parsed} />
          {/* <Pagination prevPage={prevPage} nextPage={nextPage} /> */}
          <BtnContainer>
            <div onClick={() => handlePage("prev")}>이전</div>
            <div onClick={() => handlePage("next")}>다음</div>
          </BtnContainer>
        </Listings>
      </ListWrapper>
      <MapWrapper>
        {parsed.location === "제주" ? (
          <JejuMap rooms={data} markerhighlighted={marker} />
        ) : parsed.location === "서울" ? (
          <MapView rooms={data} markerhighlighted={marker} />
        ) : null}
      </MapWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

const ListWrapper = styled.div`
  width: 840px;
  height: 100vh;
  overflow: scroll;
  padding: 2em;
  z-index: 1;

  header {
    color: ${(props) => props.theme.color.black};
    z-index: 1;

    p {
      font-size: 0.875em;
    }

    h1 {
      font-size: 2em;
      margin: 0.25em 0;
    }
  }
`;

const Listings = styled.div`
  height: 600px;
  z-index: -1;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2em;
  margin: 0 auto;

  div {
    background-color: ${(props) => props.theme.color.black};
    color: white;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    margin: 0 2em;
    cursor: pointer;

    &:hover {
      background-color: black;
    }
  }
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

export default withRouter(List);
