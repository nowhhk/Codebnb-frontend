import React, { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  //게스트 모달 띄우기
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  //게스트 인원체크
  //   const [adults, setAdults] = useState(1);
  //   const [children, setChildren] = useState(0);
  //   const [infants, setInfants] = useState(0);

  //   let guestNum;
  //   if (adults === 0 && children === 0 && infants === 0) {
  //     guestNum = "게스트 추가";
  //   } else if (infants === 0) {
  //     guestNum = "게스트 " + (adults + children) + "명";
  //   } else if (infants !== 0) {
  //     guestNum =
  //       "게스트 " + (adults + children) + "명, " + "유아" + infants + "명";
  //   }

  return (
    <>
      <SearchInput>
        <InputBtn onClick={handleOpen}>
          <div>인원</div>
        </InputBtn>
        {/* {open ? (
          <GuestModal>
            <Guests>
              <div>
                <span>성인</span>
                <span>만 13세 이상</span>
              </div>
              <div>
                <button
                  style={
                    adults === 0
                      ? {
                          color: "rgb(235, 235, 235)",
                          borderColor: "rgb(235, 235, 235)",
                        }
                      : undefined
                  }
                  onClick={() => {
                    if (adults === 1 && (children !== 0 || infants !== 0)) {
                      setAdults((num) => num);
                    } else if (adults !== 0) {
                      setAdults((num) => num - 1);
                    }
                  }}
                >
                  -
                </button>
                <div>{adults}</div>
                <button
                  onClick={() => {
                    if (adults !== 16) {
                      setAdults((num) => num + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </Guests>
            <Guests>
              <div>
                <span>어린이</span>
                <span>2~12세</span>
              </div>
              <div>
                <button
                  style={
                    children === 0
                      ? {
                          color: "rgb(235, 235, 235)",
                          borderColor: "rgb(235, 235, 235)",
                        }
                      : undefined
                  }
                  onClick={() => {
                    if (children !== 0) {
                      setChildren((num) => num - 1);
                    }
                  }}
                >
                  -
                </button>
                <div>{children}</div>
                <button
                  onClick={() => {
                    if (adults === 0 && children === 0) {
                      setAdults(1);
                      setChildren(1);
                    } else if (children !== 16) {
                      setChildren((num) => num + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </Guests>
            <Guests>
              <div>
                <span>유아</span>
                <span>2세 미만</span>
              </div>
              <div>
                <button
                  style={
                    infants === 0
                      ? {
                          color: "rgb(235, 235, 235)",
                          borderColor: "rgb(235, 235, 235)",
                        }
                      : undefined
                  }
                  onClick={() => {
                    if (infants !== 0) {
                      setInfants((num) => num - 1);
                    }
                  }}
                >
                  -
                </button>
                <div>{infants}</div>
                <button
                  style={
                    infants === 5
                      ? {
                          color: "rgb(235, 235, 235)",
                          borderColor: "rgb(235, 235, 235)",
                        }
                      : undefined
                  }
                  onClick={() => {
                    if (adults === 0 && infants === 0) {
                      setAdults(1);
                      setInfants(1);
                    } else if (infants !== 5) {
                      setInfants((num) => num + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </Guests>
            <Closing>
              <div onClick={handleOpen}>닫기</div>
            </Closing>
          </GuestModal>
        ) : null} */}
      </SearchInput>
    </>
  );
};

export default Modal;

//styled-components

const SearchWrapper = styled.div`
  width: 100%;
  height: 70px;
  /* border: solid 1px black; */
  display: flex;
  /* justify-content: space-between; */
  padding: 12px;
  margin-bottom: 70px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08) !important;
`;

const SearchInputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

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

const InputBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1em;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  cursor: pointer;
  div:nth-child(2) {
    color: ${(props) => props.theme.color.gray};
    margin-top: 3px;
    font-size: 14px;
  }
`;

const SearchBtn = styled.button`
  border: none;
  /* background-color: ${(props) => props.theme.color.red}; */
  padding: 0 25px;
  color: #ffffff;
  border-radius: 10px;
  background-image: radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% );
  background-size: 200% 200%;
  min-width:95px;
  cursor: pointer;
`;
const GuestModal = styled.div`
  z-index: 10;
  padding: 12px;
  position: absolute;
  left: 1em;
  top: 73px;
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  background-color: white;
  /* overflow: hidden; */
  /* background-color: yellow; */
  div:last-child {
    border: none;
  }
`;

const Guests = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgb(235, 235, 235);
  margin-bottom: 1em;
  padding: 16px 4px 16px 0;
  div:first-child {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
      color: ${(props) => props.theme.color.black};
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    }
    span:nth-child(2) {
      color: ${(props) => props.theme.color.gray};
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 16px;
    div {
      width: 38px;
      display: flex;
      justify-content: center;
      span {
      }
    }
    button {
      width: 30px;
      height: 30px;
      border: solid 1px rgb(176, 176, 176);
      border-radius: 50%;
      background-color: transparent;
    }
  }
`;

const Line = styled.div`
  height: 44px;
  border: solid 1px rgb(221, 221, 221);
`;

const Closing = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
  div {
    text-decoration: underline;
  }
`;
