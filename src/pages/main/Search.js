import "react-dates/initialize";
import "./reactdate.css";

import React, { useState } from "react";

import { DateRangePicker } from "react-dates";
// import moment from "moment";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Search = (props) => {
  //위치
  const [location, setLocation] = useState(null);
  const onChange = (e) => {
    setLocation(e.target.value);
  };

  //체크인, 체크아웃 날짜
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusInput] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  //게스트 모달 띄우기
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  //게스트 인원체크
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  let guestNum;
  if (adults === 0 && children === 0 && infants === 0) {
    guestNum = "게스트 추가";
  } else if (infants === 0) {
    guestNum = "게스트 " + (adults + children) + "명";
  } else if (infants !== 0) {
    guestNum =
      "게스트 " + (adults + children) + "명, " + "유아" + infants + "명";
  }

  let checkin, checkout;
  if (startDate !== null && endDate !== null) {
    checkin = startDate.format("YYYY-MM-DD");
    checkout = endDate.format("YYYY-MM-DD");
  }

  const goToList = () => {
    let checkinString = "";
    let checkoutString = "";
    let adultsString = "";
    let childrenString = "";
    let infantsString = "";

    if (checkin) {
      checkinString = `&checkin=${checkin}`;
    }
    if (checkout) {
      checkoutString = `&checkout=${checkin}`;
    }
    if (adults) {
      adultsString = `&adults=${adults}`;
    }
    if (children) {
      childrenString = `&children=${children}`;
    }
    if (infants) {
      infantsString = `&infants=${infants}`;
    }

    if (location === null) {
      alert("위치를 입력하세요");
    } else {
      props.history.push(
        `/list?location=${location}${checkinString}${checkoutString}${adultsString}${childrenString}${infantsString}`
      );
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchInputs>
          <SearchInput>
            <InputBtn>
              <div className="location">&nbsp;위치</div>
              <i className="fas fa-search min"></i>
              <form onSubmit={goToList}>
                <input
                  placeholder="어디로 여행가세요?"
                  onChange={onChange}
                  value={location}
                ></input>
              </form>
            </InputBtn>
          </SearchInput>

          <Line></Line>
          <SearchInput className="media">
            <InputBtn>
              <div>&nbsp;체크인/체크아웃</div>
              <div>
                <DateRangePicker
                  startDate={startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    onDatesChange({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) => setFocusInput(focusedInput)} // PropTypes.func.isRequired,
                  showClearDates={true}
                  startDatePlaceholderText={"날짜 추가"}
                  endDatePlaceholderText={""}
                />
              </div>
            </InputBtn>
          </SearchInput>
          <Line></Line>
          <SearchInput className="media">
            <InputBtn onClick={handleOpen}>
              <div>인원</div>
              <div>{guestNum}</div>
            </InputBtn>
            {open ? (
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
              </GuestModal>
            ) : null}
          </SearchInput>
        </SearchInputs>

        <SearchBtn onClick={goToList}>
          <i className="fas fa-search"></i>&nbsp;&nbsp;<span>검색</span>
        </SearchBtn>
      </SearchWrapper>
    </>
  );
};

export default withRouter(Search);

//styled-components

const SearchWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 70px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08) !important;
  .min {
    display: none;
  }
   {
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
    @media only screen and (max-width: 720px) {
      width: 100%;
      border-radius: 50px;
      height: 60px;
      .min {
        font-size: 16px;
        display: block;
        margin-right: 10px;
      }
      .location {
        display: none;
      }
    }
  }
`;

const SearchInputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
   {
    @media only screen and (max-width: 720px) {
      .media {
        display: none;
      }
    }
  }
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
  @media only screen and (max-width: 720px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SearchBtn = styled.button`
  border: none;
  display:flex;
  justify-content:space-around;
  align-items:center;
  /* background-color: ${(props) => props.theme.color.red}; */
  padding: 0 25px;
  color: #ffffff;
  border-radius: 10px;
  background-image: radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% );
  background-size: 200% 200%;
  min-width:95px;
  cursor: pointer;
  @media only screen and (max-width: 720px) {
      display:none;
    }
  {
    @media only screen and (max-width: 1000px) {
      min-width: 35px;
      padding: 0 16px;
    }
  }
  span {
    @media only screen and (max-width: 1000px) {
      display:none;
    }
  }
`;
const GuestModal = styled.div`
  z-index: 10;
  padding: 12px;
  position: absolute;
  left: 1em;
  top: 73px;
  width: 100%;
  height: 260px;
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

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
