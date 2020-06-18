import React from "react";
import styled from "styled-components";

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <Container>
      <div onClick={prevPage}>이전</div>
      <div onClick={nextPage}>다음</div>
    </Container>
  );
};

const Container = styled.div`
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

export default Pagination;
