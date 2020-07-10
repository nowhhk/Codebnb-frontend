import * as searchActions from "../../store/modules/seacher";

import React, { useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const GuestModal = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  searchActions.getAdults(adults);
  searchActions.getChildren(children);
  searchActions.getInfants(infants);

  let guestNum;
  if (adults === 0 && children === 0 && infants === 0) {
    guestNum = "게스트 추가";
  } else if (infants === 0) {
    guestNum = "게스트 " + (adults + children) + "명";
  } else if (infants !== 0) {
    guestNum =
      "게스트 " + (adults + children) + "명, " + "유아" + infants + "명";
  }

  return (
    <>
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
    </>
  );
};

const mapStateToProps = ({ seacher }) => ({
  location: seacher.location,
  startDay: seacher.startDay,
  endDay: seacher.endDay,
  adults: seacher.adults,
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = (dispatch) => ({
  searchActions: bindActionCreators(searchActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GuestModal)
);

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
