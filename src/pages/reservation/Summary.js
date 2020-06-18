import React from "react";
import styled from "styled-components";

const Summary = ({ data, changeCurrency, calcNights, totalAmount }) => {
  return (
    <Container>
      <div>
        <div>몇박 {calcNights()}</div>
        <div>
          {data.currency === "KRW" ? (
            <span>₩</span>
          ) : data.currency === "USD" ? (
            <span>$</span>
          ) : null}
          {`${data.price} x ${calcNights()}박`}
        </div>
        <div>
          {data.currency === "KRW" ? (
            <span>₩</span>
          ) : data.currency === "USD" ? (
            <span>$</span>
          ) : null}
          {totalAmount}
        </div>
      </div>

      <hr></hr>
      <ShortMsg>
        <p>언제까지 취소가능</p>
        <p>
          9월 30일일 까지 무료 취소 가능 그 이후 10월 9일 4:00 PM 전에 예약을
          취소하면 서비스 수수료를 제외한 요금 전액이 환불됩니다.
        </p>
      </ShortMsg>
      <Currency>
        {data.currency === "KRW" ? (
          <div>
            <button className="active" disabled="true">
              KRW
            </button>
            <button value="USD" className="inactive" onClick={changeCurrency}>
              USD
            </button>
          </div>
        ) : (
          <div>
            <button className="active" disabled="true">
              USD
            </button>
            <button value="KRW" className="inactive" onClick={changeCurrency}>
              KRW
            </button>
          </div>
        )}
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
  div {
    display: flex;

    .active {
      font-weight: bold;
      color: black;
      margin-right: 0.5em;
      background-color: transparent;
      border: none;
    }

    .inactive {
      text-decoration: underline;
      margin-right: 0.5em;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
export default Summary;
