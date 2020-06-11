import React from "react";
import styled from "styled-components";

const Toggle = () => {
  return (
    <div>
      <Container>
        <Input id="checkbox" type="checkbox" />
        <Label htmlFor="checkbox" />
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 35px;
  border-radius: 20px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin: 3px;
    background: #ffffff;
    transition: 0.2s;
  }
`;
const Input = styled.input`
  opacity: 0;
  border-radius: 15px;
  width: 55px;
  height: 35px;
  &:checked + ${Label} {
    background: ${(props) => props.theme.color.black};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      margin-left: 24px;
      transition: 0.2s;
    }
  }
`;

export default Toggle;
