import React from "react";
import styled, { css } from "styled-components";

export const Footer = () => {
  return (
    <Background>
      <FooterWrapper>
        <FooterTop>
          <section>
            <h4>소개</h4>
            <ul>
              <li>다양성 및 소속감</li>
              <li>접근성</li>
              <li>신뢰와 안전</li>
              <li>Airbnb Citizen</li>
              <li>올림픽</li>
              <li>뉴스룸</li>
            </ul>
          </section>
          <section>
            <h4>커뮤니티</h4>
            <ul>
              <li>에어비앤비 매거진</li>
              <li>에어비앤비 어소시에이트</li>
              <li>에어비앤비 비즈니스 프로그램</li>
              <li>친구 초대하기</li>
              <li>채용정보</li>
            </ul>
          </section>
          <section>
            <h4>호스팅하기</h4>
            <ul>
              <li>숙소 호스팅</li>
              <li>온라인 체험 호스팅하기</li>
              <li>브라이언 체스키 CEO의 메시지</li>
              <li>책임감 있는 호스팅</li>
              <li>Open Homes</li>
              <li>자료 센터</li>
              <li>커뮤니티 센터</li>
            </ul>
          </section>
          <section>
            <h4>에어비앤비 지원</h4>
            <ul>
              <li>코로나19 관련 업데이트</li>
              <li>도움말 센터</li>
              <li>예약 취소 옵션</li>
              <li>에어비앤비 이웃 민원 지원</li>
            </ul>
          </section>
        </FooterTop>
        <FooterBtm>
          <span>© 2020 Airbnb, Inc. All rights reserved</span>
          <span>개인정보 처리방침</span>
          <span>이용약관</span>
          <span>사이트맵</span>
          <span>한국의 변경된 환불 정책</span>
        </FooterBtm>
      </FooterWrapper>
    </Background>
  );
};

export default Footer;

//styled-components

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1760px;
  min-width: 1000px;
  padding: 0 80px;
  margin: 0 auto; /*메인에서만 적용*/
`;

const FooterTop = styled.div`
  margin: 50px auto;
  display: flex;
  section {
    width: 25%;

    h4 {
      color: ${(props) => props.theme.color.black};
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 22px;
    }
    ul {
      color: ${(props) => props.theme.color.gray};
      font-size: 14px;
      li {
        margin-bottom: 18px;
        cursor: pointer;
      }
    }
  }
`;

const FooterBtm = styled.div`
  border-top: 1px solid #dddddd;
  font-size: 14px;
  color: ${(props) => props.theme.color.black};
  padding: 24px 0;
  span {
    margin-right: 28px;
  }
`;

const Background = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;
  bottom: 0;
`;
