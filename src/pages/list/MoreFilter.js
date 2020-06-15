import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../../components/Checkbox";

const MoreFilter = ({ filter, handleModal, handleOutside }) => {
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (e) => {
    // 각 항목당 id 가 있으면 value 대신 id
    const { value } = e.target;
    let userSelected = [...selected];
    if (userSelected.includes(value)) {
      userSelected = userSelected.filter((s) => s !== value);
    } else {
      userSelected = [...userSelected, value];
    }
    setSelected(userSelected);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const clearForm = (e) => {
    e.preventDefault();
    setSelected([]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    // update fetch?
  };

  return (
    <Container>
      <Backdrop id="outside" onClick={(e) => handleOutside(e)}>
        <Box>
          <Header>
            <div>
              <i className="fas fa-times" onClick={handleModal}></i>
            </div>
            <div>필터 추가하기</div>
            <div></div>
          </Header>
          <Content>
            <Section>
              <h1>편의시설</h1>
              <div>
                <Checkbox
                  name={"amenities"}
                  value={selected}
                  options={filter.amenities}
                  onChange={handleCheckbox}
                />
              </div>
            </Section>
            <Section>
              <h1>건물유형</h1>
              <div>
                <Checkbox
                  name={"property_types"}
                  value={selected}
                  options={filter.property_types}
                  onChange={handleCheckbox}
                />
              </div>
            </Section>
            <Section>
              <h1>호스트 언어</h1>
              <div>
                <Checkbox
                  name={"languages"}
                  value={selected}
                  options={filter.languages}
                  onChange={handleCheckbox}
                />
              </div>
            </Section>
            <Section>
              <h1>건물유형</h1>
            </Section>
            <BtnContainer>
              <div onClick={clearForm}>지우기</div>
              <Btn onClick={submitForm}>저장</Btn>
            </BtnContainer>
          </Content>
        </Box>
      </Backdrop>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 101;
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 1.75em;
`;

const Content = styled.form`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 1em 1.5em;
`;

const Section = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 1em 0;

  h1 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 1.25em;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  border-top: 1px solid #eee;
`;

const Btn = styled.button`
  background-color: black;
  color: white;
  border-radius: 0.5em;
  border: none;
  padding: 0.75em 1.25em;
  cursor: pointer;
`;

export default MoreFilter;
