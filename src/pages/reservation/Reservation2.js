import React, { useState, useEffect } from "react";
import Textarea from "../../components/TextArea";
import Summary from "./Summary";
import styled from "styled-components";

const Reservation = (props) => {
  // state
  const [data, setData] = useState([]);
  const [reservation, setReservation] = useState({
    room_id: "",
    greeting: "",
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
    infants: "",
    total_cost: "",
    payment_methods: "",
  });

  console.log(props);

  // get data
  useEffect(() => {
    fetch("/data/booking.json")
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) => {
        setData(res.booking_information);
      });
  }, []);

  const changeCurrency = () => {};

  const handleMessage = (e) => {
    const { value } = e.target;
    setReservation({ ...reservation, greeting: value });
  };

  const handlePayment = (e) => {
    const { value } = e.target;
    setReservation({ ...reservation, payment_methods: value });
  };

  console.log(reservation.payment_methods);

  const sendReservation = () => {};

  // const sendRes = () => {
  //   const token = localStorage.getItem("token");
  //   fetch("address", {
  //     method: "POST",
  //     header: {
  //       "Content-type": "application/json",
  //       Authorization: token,
  //     },
  //     body: JSON.stringify({
  //       room_id
  //       greeting
  //       check_in
  //       check_out
  //       adults
  //       children
  //       infants
  //       total_cost
  //       payment_methods
  //     }),
  //   })
  //     .then((res) => res.json())
  //     //.then((res) => console.log(res));
  //     .then((res) => {
  //       console.log("response", res);
  //       if (res.status === 200) {
  //         alert("Reservation Successful");
  //         this.props.history.push("/complete?");
  //       }
  //     });
  //   this.props.history.push("/complete?");
  // };

  return (
    <Container>
      <Header>
        <svg width="102" height="32" fill="#ff5a5f">
          <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"></path>
        </svg>
      </Header>
      <MainWrapper>
        <Left>
          <h2>확인 및 결제</h2>
          <Confirm>
            <div className="placeimg">
              <img src={data.room_picture} />
            </div>
            <div className="detail">
              <p>{data.title}</p>
              <p>
                {data.place_type} · 침대 {data.beds}개 · 욕실 {data.baths}개
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <span>
                  {data.overall_rating}({data.num_reviews})
                </span>
              </div>
            </div>
          </Confirm>
          <Section>
            <div className="flexBet">
              <div className="pitch">
                <h4>흔치 않은 기회입니다</h4>
                <p>{data.host_name}님의 숙소는 보통 예약이 가득 차 있습니다.</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  class="_uhlm2"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <clipPath id="animationMask_788IkdIffV">
                      <rect width="32" height="32" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#animationMask_788IkdIffV)">
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7026,1.6496)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,13.559,16.367)">
                        <path
                          fill="rgb(0,166,153)"
                          fill-opacity="1"
                          d="M0 0 M9.433,-2.318 C9.431,-2.321 9.431,-2.324 9.433,-2.327 C9.433,-2.327 9.433,-2.329 9.432,-2.329 C9.428,-2.329 9.424,-2.331 9.421,-2.334 C9.421,-2.334 7.095,-5.566 7.095,-5.566 C6.29,-6.684 4.9879999999999995,-7.351 3.61,-7.351 C3.61,-7.351 -3.608,-7.351 -3.608,-7.351 C-4.986,-7.351 -6.288,-6.684 -7.094,-5.566 C-7.094,-5.566 -9.42,-2.334 -9.42,-2.334 C-9.422,-2.331 -9.426,-2.329 -9.43,-2.329 C-9.431,-2.329 -9.433,-2.327 -9.433,-2.327 C-9.432,-2.322 -9.428999999999998,-2.322 -9.431,-2.318 C-9.431999999999999,-2.317 -9.432,-2.314 -9.43,-2.314 C-9.424999999999999,-2.314 -9.419,-2.312 -9.416,-2.308 C-9.416,-2.308 -1.457,6.693 -1.457,6.693 C-0.682,7.569 0.6829999999999999,7.569 1.458,6.693 C1.458,6.693 9.417,-2.308 9.417,-2.308 C9.421,-2.312 9.425999999999998,-2.314 9.431,-2.314 C9.433,-2.314 9.434,-2.3160000000000003 9.433,-2.318z"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,27.743,13.593)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M0.919,0.01 C0.919,0.01 0.261,0.008 -0.675,0.005"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,5.225,4.74)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M-0.442,-1.173 C-0.404,-1.083 -0.094,-0.283 0.332,0.822"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,22.033,5.137)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M0.337,-0.745 C0.313,-0.685 0.037,-0.05 -0.347,0.832"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7023,1.6492)"
                      opacity="1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill-opacity="0"
                        stroke="rgb(72,72,72)"
                        stroke-opacity="1"
                        stroke-width="1"
                        d="M0 0 M25.482,13.592 C25.482,13.592 25.488999999999997,13.584000000000001 25.488999999999997,13.584000000000001 C25.488999999999997,13.584000000000001 25.476,13.584000000000001 25.476,13.584000000000001 C25.476,13.584000000000001 20.905,7.234000000000002 20.905,7.234000000000002 C20.905,7.234000000000002 6.2139999999999995,7.234000000000002 6.2139999999999995,7.234000000000002 C6.2139999999999995,7.234000000000002 1.642999999999999,13.584000000000001 1.642999999999999,13.584000000000001 C1.642999999999999,13.584000000000001 1.6289999999999996,13.584000000000001 1.6289999999999996,13.584000000000001 C1.6289999999999996,13.584000000000001 1.6369999999999987,13.592 1.6369999999999987,13.592 C1.6369999999999987,13.592 1.6289999999999996,13.602 1.6289999999999996,13.602 C1.6289999999999996,13.602 1.645999999999999,13.602 1.645999999999999,13.602 C1.645999999999999,13.602 13.559,27.076 13.559,27.076 C13.559,27.076 25.473,13.602 25.473,13.602 C25.473,13.602 25.488999999999997,13.602 25.488999999999997,13.602 C25.488999999999997,13.602 25.482,13.592 25.482,13.592z"
                      ></path>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,13.559,17.155)"
                      ></g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,17.782,15.199)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M2.841,-7.411 C2.192,-5.899 -0.914,2.351 -2.812,7.413"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,10.502,18.105)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M-3.057,-8.107 C-2.108,-5.895999999999999 3.057,8.107 3.057,8.107"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7023,1.6492)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(72,72,72)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d="M0 0 M24.692,13.554 C24.692,13.554 2.692,13.554 2.692,13.554"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,10.502,18.105)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 0 2.5"
                          stroke-dashoffset="0"
                          stroke="rgb(0,166,153)"
                          stroke-opacity="1"
                          stroke-width="0"
                          d="M0 0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,10.502,18.105)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 0 2.5"
                          stroke-dashoffset="0"
                          stroke="rgb(0,166,153)"
                          stroke-opacity="1"
                          stroke-width="0"
                          d="M0 0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,10.502,18.105)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 0 2.5"
                          stroke-dashoffset="0"
                          stroke="rgb(0,166,153)"
                          stroke-opacity="1"
                          stroke-width="0"
                          d="M0 0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.9681,0,0,0.9681,2.7022,1.6502)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,10.502,18.105)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke-dasharray=" 0 2.5"
                          stroke-dashoffset="0"
                          stroke="rgb(0,166,153)"
                          stroke-opacity="1"
                          stroke-width="0"
                          d="M0 0"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.0968,0,0,0.0968,15.849,25.5427)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(0,166,153)"
                          fill-opacity="1"
                          d="M0 0 M0,-10.582 C5.8402058,-10.582 10.582,-5.8402058 10.582,0 C10.582,5.8402058 5.8402058,10.582 0,10.582 C-5.8402058,10.582 -10.582,5.8402058 -10.582,0 C-10.582,-5.8402058 -5.8402058,-10.582 0,-10.582z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <hr></hr>
          </Section>
          <Section>
            <h3>예약 정보</h3>
            <div className="flexCenter">
              <div className="res">
                <h4>날짜</h4>
                <p>{data.dates}</p>
              </div>
            </div>
            <div className="flexCenter">
              <div className="res">
                <h4>게스트</h4>
                <p>게스트 {data.guest_total}명</p>
              </div>
            </div>
            <hr></hr>
          </Section>
          <Section>
            <h3>결제 일정</h3>
            <div className="payment">
              <div>
                <h4>{data.price}₩231,059 지금 결제</h4>
                <p>총액을 결제하시면 모든 절차가 완료됩니다.</p>
              </div>
              <label>
                <input type="radio" value="full" checked="true" />
              </label>
            </div>
            <h4>결제 수단</h4>
            <div className="payment">
              <div>
                {data.payment_methods &&
                  data.payment_methods.map((m, idx) => (
                    <label key={m.idx}>
                      <input
                        type="radio"
                        name="payment"
                        value={m}
                        onChange={handlePayment}
                      />
                      {m}
                    </label>
                  ))}
              </div>
            </div>
            <hr></hr>
          </Section>

          <Section>
            <h3>필수 입력 정보</h3>
            <div className="req">
              <h4>호스트에게 메시지 보내기</h4>
              <p>호스트에게 여행 목적과 도착 예정 시간을 알려주세요.</p>
            </div>
            <div className="host">
              <div className="avatar">
                <img src={data.host_avatar} />
              </div>
              <div>
                <p>{data.host_name}</p>
                <p>에어비앤비 가입: {data.user_since}년</p>
              </div>
            </div>
            <div className="message">
              <input
                type="textarea"
                name="message"
                value={reservation.greeting}
                onChange={handleMessage}
              ></input>
            </div>
            <hr></hr>
          </Section>

          <Section>
            <div className="refund">
              <h3>환불 정책</h3>
              <p>
                8월 12일 4:00 PM 전에 예약을 취소하면 요금 전액이 환불됩니다. 그
                이후 8월 21일 4:00 PM 전에 예약을 취소하면 서비스 수수료를
                제외한 요금 전액이 환불됩니다. 자세히 보기
              </p>
              <p>
                호스트가 제공하는 환불 정책이 내게 적합한지 확인하세요. 3월 15일
                혹은 그 이후 확정된 예약에는 코로나19 확산 사태에 따른
                정상참작이 가능한 상황 정책이 적용되지 않습니다. 자세히 알아보기
              </p>
            </div>
            <hr></hr>
          </Section>

          <Section>
            <p className="terms">
              아래 버튼을 선택하면, 숙소 이용규칙, 환불 정책, 및 게스트 환불
              정책에 동의하는 것입니다. 또한 숙박세 및 서비스 수수료를 포함하여
              표시된 총 금액에 동의합니다. 에어비앤비는 이제 이 지역에서 정부가
              부과한 숙박세를 징수하여 납부합니다.
            </p>
          </Section>

          <button onClick={sendReservation}>확인 및 결제</button>
        </Left>
        <Right>
          {/* pass in checkin, checkout, price */}
          <Summary price={data.price} changeCurrency={changeCurrency} />
        </Right>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.black};
`;

const Header = styled.div`
  max-width: 1080px;
  margin: 0 auto 2em;

  svg {
    width: 2em;
    height: 2em;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
`;

const Left = styled.div`
  width: 55%;

  h2 {
    font-size: 1.875rem;
    margin-bottom: 1em;
  }
`;

const Confirm = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.3em;
  padding-right: 2em;

  .placeimg {
    margin-right: 1em;

    img {
      width: 108px;
      height: 80px;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .detail {
    p:first-child {
      font-size: 1rem;
      font-weight: bold;
    }

    p {
      font-size: 0.875rem;
    }

    .rating {
      font-size: 0.8rem;

      .fas {
        color: ${(props) => props.theme.color.red};
      }

      span {
        color: ${(props) => props.theme.color.gray};
        margin-left: 0.25em;
      }
    }
  }
`;

const Section = styled.section`
  margin: 2em 2em 2em 0;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.875em;
  }

  .flexBet {
    display: flex;
    justify-content: space-between;
  }

  .flexCenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pitch {
    p {
      color: ${(props) => props.theme.color.gray};
      margin: 0.35em 0;
    }
  }

  .res {
    margin: 0.875em 0;
    p {
      color: ${(props) => props.theme.color.gray};
      margin: 0.875em 0;
    }
  }

  .payment {
    display: flex;
    justify-content: space-between;
    border: 1px solid #008489;
    border-radius: 0.25em;
    padding: 1.75em 1.25em;
    margin: 1em 0 2em 0;

    p {
      margin: 0.5em 0;
    }
  }

  .req {
    h4 {
      margin-bottom: 0.5em;
    }

    p {
      font-size: 0.95rem;
      color: ${(props) => props.theme.color.gray};
    }
  }

  .host {
    display: flex;
    align-items: center;
    margin: 1.5em 0;

    .avatar {
      margin-right: 1em;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    p {
      margin-bottom: 0.25em;
    }
  }

  .message {
    width: 100%;
    margin: 2em 0;

    input {
      width: 100%;
      height: 8em;
      border: 1px solid #dedede;
      border-radius: 0.5em;
    }
  }

  .refund {
    border-left: 8px solid #ffaf0f;
    padding-left: 1em;

    h3 {
      font-size: 1.5rem;
    }

    p {
      color: ${(props) => props.theme.color.gray};
      line-height: 1.25em;
      margin: 1em 2em 1em 0;
    }
  }

  .terms {
    font-size: 0.875rem;
    line-height: 1rem;
  }

  hr {
    margin: 1em 0;
  }
`;
const Right = styled.div`
  width: 40%;
`;

export default Reservation;
