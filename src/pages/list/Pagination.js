import React from "react";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageUl>
          <PageLi>1</PageLi>
          <PageLi>2</PageLi>
          <PageLi>3</PageLi>
        </PageUl>
        <p>숙소 300개 이상 중 1-20</p>
      </div>
      <div
        style={{ textAlign: "center", fontSize: ".875rem", margin: ".875em" }}
      >
        <p>추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px - 600px);
`;

const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const PageLi = styled.li`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: black;
  margin: 0 0.25em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Pagination;
