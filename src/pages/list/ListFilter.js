import React, { useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Toggle from "../../components/Toggle";
import MoreFilter from "./MoreFilter";
import { useState, useRef } from "react";

const ListFilter = () => {
  const [filter, setFilter] = useState([]);
  const [dropdown, setDropdown] = useState(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/data/filter.json")
      .then((res) => res.json())
      .then((res) => {
        setFilter(res);
        // console.log(filter);
      });
  }, []);

  const handleDrop = (id) => {
    setDropdown(id);
  };

  const handleDDOutside = (e) => {
    if (e.target.id === "outside") {
      handleDrop();
    }
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const handleOutside = (e) => {
    if (e.target.id === "outside") {
      handleModal();
    }
  };

  return (
    <Container>
      <div>
        <Pill onClick={() => handleDrop(0)}>유연한 환불 정책</Pill>
        {dropdown === 0 ? (
          <Dropdown handleDDOutside={handleDDOutside}>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "2em" }}>
                유연한 화불 정책을 제공하는 숙소만 검색 결과에 표시
              </div>
              <Toggle></Toggle>
            </div>
          </Dropdown>
        ) : null}
      </div>
      <div>
        <Pill onClick={() => handleDrop(1)}>숙소 유형</Pill>
        {dropdown === 1 ? (
          <Dropdown handleDDOutside={handleDDOutside}>
            <div style={{ display: "flex" }}>
              <Checkbox type="checkbox" style={{ marginRight: "1em" }} />
              <div>
                <div>집 전체</div>
                <div>집 전체를 단독으로 사용합니다.</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox type="checkbox" style={{ marginRight: "1em" }} />
              <div>
                <div>개인실</div>
                <div>
                  침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와
                  함께 이용할 수도 있습니다.
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox type="checkbox" style={{ marginRight: "1em" }} />
              <div>
                <div>호텔 객실</div>
                <div>
                  부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Checkbox type="checkbox" style={{ marginRight: "1em" }} />
              <div>
                <div>다인실</div>
                <div>
                  사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                  이용합니다
                </div>
              </div>
            </div>
          </Dropdown>
        ) : null}
      </div>
      <Pill onClick={() => handleDrop(2)}>요금</Pill>
      {dropdown === 2 ? (
        <Dropdown handleDDOutside={handleDDOutside}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "2em" }}>요금</div>
          </div>
        </Dropdown>
      ) : null}
      <Pill onClick={handleModal}>필터 추가하기</Pill>
      {open ? (
        <MoreFilter
          filter={filter}
          handleModal={handleModal}
          handleOutside={handleOutside}
        >
          hello
        </MoreFilter>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0.875em 0;

  div {
    display: relative;
  }
`;

const Pill = styled.button`
  border-radius: 5em;
  background-color: transparent;
  border: 1px solid #969696;
  color: ${(props) => props.theme.color.black};
  padding: 0.65em 1.75em;
  margin: 1em 0.25em;
  cursor: pointer;
`;

const Filter = styled.div`
  width: 650px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 1em;
`;

const Checkbox = styled.input``;

export default ListFilter;
