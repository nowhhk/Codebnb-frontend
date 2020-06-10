import React, { Component, useState, useEffect, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Calendar from "./calendar/Calendar";
import Calculation from './Calculation/Calculation';



const Detail = () => {
    return (
      <>
        <Container>
          Detail page
        </Container>
        <Calendar />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Calculation checkInDate="6월 10일" checkOutDate="6월 12일"/>


      </>
      );
}

const Container = styled.div`
  height: 100px;
  width: 100px;
  font-size: 20px;
  color: red;
  border: 1px solid blue;
`


export default Detail;