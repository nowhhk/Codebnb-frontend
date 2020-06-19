import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { API } from "../../config";

const Form = (props) => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    cleanliness: "5",
    communication: "5",
    check_in: "5",
    accuracy: "5",
    location: "5",
    value: "5",
    content: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    // console.log(props.roomId, props.hostId);
    const token = localStorage.getItem("access_token");
    fetch(`${API}/api/review/${props.roomId}/${props.hostId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        inputs: inputs,
      }),
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
        // history.push(`/datail/${props.roomId}`);
      } else {
        alert("");
      }
    });
    // .then((res) => p window.location.reload());
  };

  return (
    <Back>
      <FormWrapper>
        <form>
          <label>청결도</label>
          <select name="cleanliness" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>의사소통</label>
          <select name="communication" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>체크인</label>
          <select name="check_in" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>정확도</label>
          <select name="accuracy" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>위치</label>
          <select name="location" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>가격</label>
          <select name="value" onChange={onChange}>
            <option value="5" selected>
              5
            </option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <label>리뷰 작성</label>
          <textarea rows="4" name="content" onChange={onChange}></textarea>
          <button onClick={handleSubmit}>보내기</button>
        </form>
      </FormWrapper>
    </Back>
  );
};

export default Form;

//styled-components

const Back = styled.div`
  position: fixed !important;
  z-index: 2000 !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  overflow-y: auto !important;
  background: rgba(0, 0, 0, 0.75) !important;
`;

const FormWrapper = styled.div`
  position: fixed !important;
  top: 25%;
  left: 40%;
  width: 350px;
  height: 490px;
  padding: 1em 2em;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  form {
    display: flex;
    flex-direction: column;
    label {
    }
    select {
      padding: 0.4em 0.5em;
      font-family: inherit;
      background: url("") no-repeat 95% 50%;
      border: 1px solid #999;
      border-radius: 0px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 10px;
      cursor: pointer;
    }
    textarea {
      border-radius: 10px;
    }
    label {
      margin: 3px 0;
    }
    button {
      border: none;
      background-color: ${(props) => props.theme.color.red};
      padding: 0 25px;
      color: #ffffff;
      border-radius: 10px;
      background-image: radial-gradient(
        circle at center,
        #ff385c 0%,
        #e61e4d 27.5%,
        #e31c5f 40%,
        #d70466 57.5%,
        #bd1e59 75%,
        #bd1e59 100%
      );
      background-size: 200% 200%;
      min-width: 95px;
      padding: 10px;
      margin-top: 16px;
      cursor: pointer;
    }
  }
`;
