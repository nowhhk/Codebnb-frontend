import React from "react";
import styled from "styled-components";

const MoreFilter = ({ handleModal, handleOutside }) => {
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
              <h1>침실과 침대</h1>
            </Section>
            <Section>
              <h1>편의시설</h1>
              <Line>
                <div>
                  <input type="checkbox" style={{ marginRight: "1em" }} />
                  <span>map facilities</span>
                </div>
                <div>
                  <input type="checkbox" style={{ marginRight: "1em" }} />
                  <span>list or div?</span>
                </div>
              </Line>
            </Section>
            <Section>
              <h1>시설</h1>
            </Section>
            <Section>
              <h1>건물유형</h1>
            </Section>
            <Section>
              <h1>숙소 이용규칙</h1>
            </Section>
          </Content>
          <BtnContainer>
            <div>지우기</div>
            <Btn>저장</Btn>
          </BtnContainer>
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

const Content = styled.div`
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
  }
`;

const Line = styled.div`
  display: flex;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
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
