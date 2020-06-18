import React, { Component, useState, useEffect, Fragment } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import Calendar from "./calendar/Calendar";
import Calculation from "./Calculation/Calculation";
import "react-dates/initialize";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import LocationMap from "../detail/LocationMap";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <>
        <DetailWrapper>
          {/* <div style={{ display: "flex" }}></div> */}

          <TitleHeader>
            <UpperTitleWrapper>#3 Bucheon / 4ppl only USD50</UpperTitleWrapper>
            <DownTitleWrapper>
              <PointAddress>4.75(61) (Address)</PointAddress>
              <ShareSave>공유하기 저장</ShareSave>
            </DownTitleWrapper>

            <PhotoSliderWrapper>
              <PhotoSlider_Left></PhotoSlider_Left>
              <PhotoSlider_Right>
                <PhotoSlider1></PhotoSlider1>

                <PhotoSlider2></PhotoSlider2>
                <PhotoSlider3></PhotoSlider3>
                <PhotoSlider4></PhotoSlider4>
              </PhotoSlider_Right>
            </PhotoSliderWrapper>
          </TitleHeader>

          <MiddleWrapper>
            <MiddleWrapper_Left>
              <Summary>
                <UpperSummary>
                  <UpperSummary_Left>
                    <UpperSummary_Left1>
                      (Olivia)님이 호스팅하는 (아파트 전체)
                    </UpperSummary_Left1>
                    <UpperSummary_Left2>
                      인원4명 침실2개 침대2개 욕실1개
                    </UpperSummary_Left2>
                  </UpperSummary_Left>
                  <UpperSummary_Right>프로필 사진</UpperSummary_Right>
                </UpperSummary>
                <DownSummary>
                  <DownSummary_1>
                    <DownSummary_Left>
                      <i class="fas fa-home fa-lg"></i>
                    </DownSummary_Left>
                    <DownSummary_Right>
                      <DownSummary_Right1>집 전체</DownSummary_Right1>
                      <DownSummary_Right2>
                        아파트 전체를 단독으로 사용하시게 됩니다
                      </DownSummary_Right2>
                    </DownSummary_Right>
                  </DownSummary_1>
                  <DownSummary_2>
                    <DownSummary_Left>
                      <i class="fas fa-user-lock"></i>
                    </DownSummary_Left>
                    <DownSummary_Right>
                      <DownSummary_Right1>셀프 체크인</DownSummary_Right1>
                      <DownSummary_Right2>
                        키패드를 이용해 체크인하세요
                      </DownSummary_Right2>
                    </DownSummary_Right>
                  </DownSummary_2>
                  <DownSummary_3>
                    <DownSummary_Left>
                      <i class="fas fa-spray-can"></i>
                    </DownSummary_Left>
                    <DownSummary_Right>
                      <DownSummary_Right1>
                        깨끗하고 깔끔한 숙소
                      </DownSummary_Right1>
                      <DownSummary_Right2>
                        최근 게스트 10명이 이 숙소가 티 없이 깨끗하다고 후기를
                        남겼습니다.
                      </DownSummary_Right2>
                    </DownSummary_Right>
                  </DownSummary_3>
                  <DownSummary_4>
                    <DownSummary_Left>
                      <i class="fas fa-credit-card"></i>
                    </DownSummary_Left>
                    <DownSummary_Right>
                      <DownSummary_Right1>환불 정책</DownSummary_Right1>
                      <DownSummary_Right2>
                        체크인 30일 전까지 취소하시면 전액이 환불됩니다.
                      </DownSummary_Right2>
                    </DownSummary_Right>
                  </DownSummary_4>
                </DownSummary>
              </Summary>

              <Description>
                **인체에 무해한 소독제를 사용해 건물 전체를 수시로
                소독중입니다** 예약하시는 모든 게스트님들도 개인위생을 철저하게
                부탁드립니다. 감사합니다**
              </Description>
              <Bed>
                <Bed_Upper>침대/침구 유형</Bed_Upper>
                <Bed_Down>
                  <Bed_Down_Box>
                    <Bed_Image>
                      <i class="fas fa-bed"></i>
                    </Bed_Image>
                    <Bedroom_Num>1번 침실</Bedroom_Num>
                    <Bed_Size_Num>퀸사이즈 침대 1개</Bed_Size_Num>
                  </Bed_Down_Box>
                </Bed_Down>
              </Bed>

              <Convinience>
                <Convinience_Upper>편의시설</Convinience_Upper>
                <Convinience_Down>
                  <Convinience_Down_Left>
                    <CDL>
                      <CDL_Image>
                        <i class="fas fa-utensils"></i>
                      </CDL_Image>
                      <CDL_Item>주방</CDL_Item>
                    </CDL>

                    <CDL>
                      <CDL_Image>
                        <i class="fas fa-building"></i>
                      </CDL_Image>
                      <CDL_Item>엘리베이터</CDL_Item>
                    </CDL>

                    <CDL>
                      <CDL_Image>
                        <i class="fas fa-tv"></i>
                      </CDL_Image>
                      <CDL_Item>케이블TV</CDL_Item>
                    </CDL>

                    <CDL>
                      <CDL_Image>
                        <i class="fas fa-laptop-code"></i>
                      </CDL_Image>
                      <CDL_Item>노트북 작업 공간</CDL_Item>
                    </CDL>

                    <CDL>
                      <CDL_Image>
                        <i class="fas fa-user-secret"></i>
                      </CDL_Image>
                      <CDL_Item>옷걸이</CDL_Item>
                    </CDL>
                  </Convinience_Down_Left>
                </Convinience_Down>
              </Convinience>

              <Calendar_Left>
                <Calendar_Upper>체크인 날짜를 선택해 주세요.</Calendar_Upper>
                <DayPickerRangeController
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                  initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
                  numberOfMonths="2"
                />
              </Calendar_Left>
              <Point>
                <Point_Upper>후기 1개</Point_Upper>
                <Point_Down>
                  조용하고 편의시설도 가까이 있어서 좋았습니다.
                </Point_Down>
              </Point>
            </MiddleWrapper_Left>
            <MiddleWrapper_Right>
              <Calculator>
                <Calculation />
              </Calculator>
            </MiddleWrapper_Right>
          </MiddleWrapper>
          <LowerWrapper>
            <Location>
              <Location_Upper>위치</Location_Upper>
              <Location_Middle>
                <LocationMap />
              </Location_Middle>
              <Location_Down>부평역, 문화의 거리, 테마의 거리</Location_Down>
            </Location>

            <Location>
              <Location_Upper>호스트: 동휘님</Location_Upper>
              <Location_Middle>후기 1개</Location_Middle>
              <Location_Down>반갑습니다.</Location_Down>
            </Location>
          </LowerWrapper>
        </DetailWrapper>
      </>
    );
  }
}

export default Detail;

const DetailWrapper = styled.div`
  /* div{
    display: flex;
  } */
  /* border: 20px solid blue; */
`;
const TitleHeader = styled.div`
  width: 1120px;
  height: 88px;
  margin: 0 auto;
  /* border: 1px solid orange; */
`;

const UpperTitleWrapper = styled.div`
  width: 1120px;
  height: 30px;
  font-size: 26px;
  font-weight: 600;
  margin: 10px 0px;
`;

const DownTitleWrapper = styled.div`
  width: 1120px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 14px 0px;
  /* border: 1px solid red; */
`;

const PointAddress = styled.div`
  /* width: 1120px; */
  height: 30px;
  font-size: 14px;
`;

const ShareSave = styled.div`
  /* width: 1120px; */
  height: 30px;
  font-size: 14px;
`;

const PhotoSliderWrapper = styled.div`
  width: 1120px;
  height: 541.39px;
  display: flex;
  cursor: pointer;
`;

const PhotoSlider_Left = styled.div`
  width: 560px;
  height: 541.39px;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  /* border: 1px solid orange; */
  background-image: url("https://a0.muscache.com/im/pictures/37edc9ce-2e90-4faf-93fb-c45f78727f42.jpg?im_w=720");
`;

const PhotoSlider_Right = styled.div`
  width: 560px;
  height: 541.39px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* border: 1px solid green; */
`;
const PhotoSlider1 = styled.div`
  width: 272px;
  height: 270.69px;

  background-image: url("https://a0.muscache.com/im/pictures/f5c0c117-f781-4f5b-9c41-f013e94234b9.jpg?im_w=320");
  /* border: 1px solid purple; */
`;
const PhotoSlider2 = styled.div`
  width: 272px;
  height: 270.69px;

  border-top-right-radius: 9px;
  background-image: url("https://a0.muscache.com/im/pictures/51dbb3e1-97c7-49cb-bb5e-9aadb1606b7c.jpg?im_w=320");
  /* border: 1px solid purple; */
`;
const PhotoSlider3 = styled.div`
  width: 272px;
  height: 270.69px;

  background-image: url("https://a0.muscache.com/im/pictures/253f5904-3b65-4bbd-921b-41c17268d832.jpg?im_w=320");
  /* border: 1px solid purple; */
`;
const PhotoSlider4 = styled.div`
  width: 272px;
  height: 270.69px;

  border-bottom-right-radius: 9px;
  background-image: url("https://a0.muscache.com/im/pictures/770b3db8-da1a-492a-9aa5-59c0e03a1840.jpg?im_w=320");
  /* border: 1px solid purple; */
`;

const MiddleWrapper = styled.div`
  display: flex;
  width: 1120px;
  margin: 0 auto;
  margin-top: 580px;
  border-bottom: 1px solid #dddddd;
  /* border: 5px solid black; */
`;
const MiddleWrapper_Left = styled.div`
  display: block;
  width: 646.59px;
  /* border: 5px solid green; */
`;

const Summary = styled.div`
  display: block;
  width: 646.59px;
  border-bottom: 1px solid #dddddd;
`;

const UpperSummary = styled.div`
  width: 646.59px;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #dddddd;
`;
const UpperSummary_Left = styled.div`
  width: 574.59px;
  height: 56px;
  /* border: 1px solid purple; */
`;

const UpperSummary_Left1 = styled.div`
  width: 574.59px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  /* border: 1px solid black; */
`;

const UpperSummary_Left2 = styled.div`
  width: 574.59px;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  /* border: 1px solid black; */
`;

const UpperSummary_Right = styled.div`
  width: 56px;
  height: 56px;
  /* border: 1px solid black; */
`;

const DownSummary = styled.div``;
const DownSummary_1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
`;
const DownSummary_2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
`;
const DownSummary_3 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
`;
const DownSummary_4 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
`;

const DownSummary_Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 30px;
  height: 30px;
  /* border: 1px solid purple; */
`;
const DownSummary_Right = styled.div`
  height: 40px;
  margin: 10px 0px 10px 10px;
`;
const DownSummary_Right1 = styled.div`
  height: 20px;
  font-size: 16px;
  font-weight: 600;
`;
const DownSummary_Right2 = styled.div`
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #717171;
`;
const Description = styled.div`
  display: block;
  width: 646.59px;
  border-bottom: 1px solid #dddddd;
  padding: 40px 0px 40px 0px;
`;

const Bed = styled.div`
  display: block;
  width: 646.59px;
  border-bottom: 1px solid #dddddd;
  padding: 40px 0px;
`;

const Bed_Upper = styled.div`
  width: 646.59px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Bed_Down = styled.div`
  width: 646.59px;
  height: 143px;
`;
const Bed_Down_Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  width: 204.28px;
  height: 143px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  vertical-align: middle;
`;
const Bed_Image = styled.div`
  width: 24px;
  height: 24px;
`;
const Bedroom_Num = styled.div`
  width: 154.28px;
  height: 20px;
  font-size: 16px;
  font-weight: 600;
`;
const Bed_Size_Num = styled.div`
  width: 154.28px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #222222  
  border: 1px soild green;
`;

const Convinience = styled.div`
  display: block;
  width: 646.59px;
  border-bottom: 1px solid #dddddd;
  padding: 40px 0px;
`;
const Convinience_Upper = styled.div`
  width: 646.59px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Convinience_Down = styled.div`
  width: 646.59px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const Convinience_Down_Left = styled.div`
  width: 262.73px;
`;

const CDL = styled.div`
  width: 646.59px;
  display: flex;
  margin: 10px 0px;
`;
const CDL_Image = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
`;
const CDL_Item = styled.div`
  width: 230px;
  height: 24px;
  margin-left: 10px;
`;
const Calendar_Left = styled.div`
  display: block;
  width: 646.59px;
  border-bottom: 1px solid #dddddd;
  padding: 40px 0px;
`;
const Calendar_Upper = styled.div`
  width: 646.59px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Point = styled.div`
  display: block;
  width: 646.59px;
  /* border-bottom: 1px solid #dddddd; */
  padding: 40px 0px;
`;
const Point_Upper = styled.div`
  width: 646.59px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Point_Down = styled.div`
  width: 646.59px;
  height: 70px;
  font-size: 16px;
  font-weight: 400;
`;
const LowerWrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  /* border: 1px solid green; */
`;
const Location = styled.div`
  width: 1120px;
  padding: 40px 0px;
  border-bottom: 1px solid #dddddd;
`;
const Location_Upper = styled.div`
  width: 1120px;
  height: 26px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Location_Middle = styled.div`
  width: 1120px;
  height: 480px;
`;
const Location_Down = styled.div`
  width: 1120px;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
`;

const MiddleWrapper_Right = styled.div`
  margin: 0 auto;
  /* border: 1px solid purple; */
`;

const Calculator = styled.div`
  margin: 0 auto;
  position: sticky;
  top: 40px;
`;
