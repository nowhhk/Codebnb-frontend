import React from "react";
import styled from "styled-components";

const Summary = ({ price, changeCurrency }) => {
  return (
    <Container>
      <div>상세페이지에서 가져오기</div>

      <hr></hr>
      <ShortMsg>
        <p>언제까지 취소가능</p>
        <p>
          9월 30일일 까지 무료 취소 가능 그 이후 10월 9일 4:00 PM 전에 예약을
          취소하면 서비스 수수료를 제외한 요금 전액이 환불됩니다.
        </p>
      </ShortMsg>
      <Currency>
        <div onClick={changeCurrency}>KRW</div>
        <div onclick={changeCurrency}>USD</div>
      </Currency>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid #e4e4e4;
  border-radius: 1em;
  padding: 2em;
`;

const ShortMsg = styled.div`
  p {
    line-height: 1.4em;
  }

  p:last-child {
    color: ${(props) => props.theme.color.gray};
  }
`;

const Currency = styled.div`
  display: flex;
  cursor: pointer;
`;
export default Summary;
