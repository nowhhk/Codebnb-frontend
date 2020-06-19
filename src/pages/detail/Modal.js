import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  //게스트 모달 띄우기
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <SearchInput>
        <InputBtn onClick={handleOpen}>
          <div>인원</div>
        </InputBtn>
      </SearchInput>
    </>
  );
};

export default Modal;

//styled-components

const SearchInput = styled.div`
  border-radius: 10px;
  padding: 8px;
  width: 100%;
  font-size: 12px;
  position: relative;

  input {
    border: none;
    margin-top: 3px;
    font-size: 14px;
    width: 100%;
  }
`;

const InputBtn = styled.div``;
