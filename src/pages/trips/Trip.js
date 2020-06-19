import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Form from "./Form";
import { API } from "../../config";

const Trip = (props) => {
  const [openComment, setOpenComment] = useState(false);

  const handleOpen = () => {
    const token = localStorage.getItem("access_token");
    console.log(props);
    fetch(`${API}/api/review/${props.room_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      //   .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          //headers status
          setOpenComment(!openComment);
        } else {
          alert("이미 작성한 후기가 있습니다.");
        }
      });
  };

  const handleClose = () => {
    setOpenComment(false);
  };

  return (
    <TripThumbnail>
      <img src={`${props.image_url[0]}`} alt="" />

      <div>
        <span>
          {props.start_date} - {props.end_date}
        </span>
        <span>{props.address}</span>
        <span>{props.title}</span>
      </div>
      <div>
        <button onClick={handleOpen}>리뷰 쓰기</button>
      </div>
      {openComment ? (
        <Form
          roomId={props.room_id}
          hostId={props.host_id}
          handleClose={handleClose}
        />
      ) : null}
    </TripThumbnail>
  );
};

export default Trip;

const TripThumbnail = styled.div`
  width: 31%;
  border-radius: 10px;
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  div {
    padding: 16px;
    border-bottom: solid 1px #dddddd;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.color.gray};
    span:nth-child(1) {
      /* color: ${(props) => props.theme.color.gray}; */
      font-size: 14px;
    }
    span:nth-child(2) {
      color: ${(props) => props.theme.color.black};
      font-size: 20px;
      font-weight: 600;
      margin: 8px 0 16px 0;
    }
  }
  div:nth-child(3) {
    button {
        width:100%;
      border: none;
      background: none;
      font-size: 14px;
      font-weight: 600;
      cursor:pointer;
    }
  }
`;