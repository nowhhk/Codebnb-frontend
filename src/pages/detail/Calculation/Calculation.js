import React, { Component, useState, useEffect, Fragment } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      startDate: null,
      endDate: null,
      unitPrice: 55000,
      totalPrice: 0,
      cleanCost: 45000,
      stage1: false,
      stage2: true,
    }
  }

  totalPriceCalculator = (startDate, endDate) => {
    const { unitPrice } = this.state;
    let duration = 0;
    if (endDate) {
      duration = endDate.diff(startDate, 'days');
    }
    const totalPrice = duration * unitPrice;
    this.setState({ duration, totalPrice });
  };

  displayHandler = (endDate) => {
    if (endDate) {
      this.setState({ stage1: true })
      this.setState({ stage2: false })
    }
  };

  unitPriceUpdater = () => {
      // FETCH API DATA GET
  };

  render() {
      const { 
        duration,
        unitPrice,
        totalPrice,
        cleanCost, } = this.state;
      
    return (
      <>
        <CalendarWrapper>
          <TopWrapper>
            {this.state.stage2 &&
            <GuideWrapper1>
                요금을 확인하려면 날짜를 입력하세요.
            </GuideWrapper1>}
            {this.state.stage1 &&
            (<GuidePrice>
              <GuideWrapper2>
                  ${unitPrice.toLocaleString()}
              </GuideWrapper2>
              <GuideWrapper3>
                  /박
              </GuideWrapper3>
            </GuidePrice>)}
            <PointWrapper>
                4.75 (61)
            </PointWrapper>
          </TopWrapper>  
          <MiddleWrapper>
            <DateRangePicker
                startDate={this.state.startDate} 
                startDateId="your_unique_start_date_id" 
                endDate={this.state.endDate}
                endDateId="your_unique_end_date_id" 
                onDatesChange={({ startDate, endDate }) => {
                  this.setState({ startDate, endDate })
                  this.totalPriceCalculator(startDate, endDate)
                  this.displayHandler(endDate)
                }}
                focusedInput={this.state.focusedInput} 
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                appendToBody={true}
                />
            </MiddleWrapper>

          {this.state.stage2 && <Button>예약 가능 여부 보기</Button>}

          {this.state.stage1 && (<BottomWrapper>
                    <Button>예약 하기</Button>
              <CommentWrapper>
                예약 확정 전에는 요금이 청구되지 않습니다
              </CommentWrapper>
              <CalculWrapper>
                  <Calcul_Left_Wrapper>
                    <tr>
                      <td className="longwidth"> ${unitPrice.toLocaleString()} x {duration}박 </td>
                    </tr>
                    <tr>
                      <td>청소비</td>
                    </tr>
                    <tr>
                      <td>서비스 수수료</td>
                    </tr>
                    <tr>
                      <td>숙박세와 수수료</td>
                    </tr>
                  </Calcul_Left_Wrapper>
                  <Calcul_Right_Wrapper>
                    <tr>
                      <td> ${totalPrice.toLocaleString()} </td>
                    </tr>
                    <tr>
                      <td>${cleanCost.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>${Math.round(totalPrice*0.17).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>${Math.round(totalPrice*0.17*0.1).toLocaleString()}</td>
                    </tr>
                  </Calcul_Right_Wrapper>
              </CalculWrapper>
              <Line/>
              <GrandTotalWrapper>
                <Grand_Left_Wrapper>
                    <tr>
                      <td>총 합계</td>
                    </tr>
                </Grand_Left_Wrapper>
                <Grand_Right_Wrapper>
                    <tr>
                      <td>${Math.round(totalPrice + cleanCost + (totalPrice*0.17) + (totalPrice*0.17*0.1)).toLocaleString()}</td>
                    </tr>
                </Grand_Right_Wrapper>
              </GrandTotalWrapper>   
            </BottomWrapper>)}
       </CalendarWrapper>
      </>
    );
  }
}

export default Calendar;

const CalendarWrapper = styled.div`
  width: 362.63px;
  margin: 24px 0px ;
  padding: 8px 24px 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px !important;
  border-radius: 12px;
  
  
  /* border: 1px solid blue; */

`;

const TopWrapper = styled.div`
  width: 314.63px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid red */
  
`;

const GuideWrapper1 = styled.div`
  width: 251.38px;
  height: 54px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;

const GuidePrice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid red */
`

const GuideWrapper2 = styled.div`
  width: 91.23px;
  height: 28px;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
`;

const GuideWrapper3 = styled.div`
  width: 26.81px;
  height: 21px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;

`;

const PointWrapper = styled.div`
  width: 48.06px;
  height: 36px;
  font-size: 14px; 
  text-align: right; 
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0px 20px 0px ;
  .DateInput {
    background-color: red;
  }
`;

const BottomWrapper = styled.div`

`;

const Button = styled.button`
  width: 314.63px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-image: var(--dls19-brand-gradient-radial, radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% )) !important;
  background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%);
  cursor: pointer;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border-radius: 8px;
  outline: none;
`;

const CommentWrapper = styled.div`
  font-size : 14px;
  color: #222222;
  margin: 20px 0px;
  text-align: center;

`

const CalculWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Calcul_Left_Wrapper = styled.div`
  font-size: 16px;
  color: #222222;
  td {
    width: 140px;
    height: 25px;
    text-align: left;
    text-decoration: underline;
  }
`

const Calcul_Right_Wrapper = styled.div`
  font-size: 16px;
  color: #222222;
  td {
    width: 140px;
    height: 25px;
    text-align: right;
  }
`

const Line = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid #dddddd;
        margin: 10px 0px;
`

const GrandTotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  /* border: 1px solid blue; */
`

const Grand_Left_Wrapper = styled.div`
  font-size: 16px;
  color: #222222;
  font-weight: 600;
  td {
    width: 140px;
    height: 25px;
    text-align: left;
    text-decoration: underline;
  }
`

const Grand_Right_Wrapper = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  td {
    width: 140px;
    height: 25px;
    text-align: right;
    
  }
`