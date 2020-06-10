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
    }
  }

  durationCalculator = (startDate, endDate) => {
    const { unitPrice } = this.state;
    let duration = 0;
    
    
    if (endDate) {
      duration = endDate.diff(startDate, 'days');
    }
    
    const totalPrice = duration * unitPrice;
    this.setState({ duration, totalPrice });
  };

  unitPriceUpdater = () => {
      // FETCH API DATA GET
  }

  costCalculator = () => {
      const { unitPrice, cost, duration } = this.state;

      this.setState({
          cost: duration * unitPrice
      }, () =>{console.log("cost :", cost)})
  }

  render() {
      const { startDate, 
        endDate, 
        duration,
        unitPrice,
        totalPrice } = this.state;
      
    return (
      <>
        <div className="Calendar>">
        <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              this.setState({ startDate, endDate })
              this.durationCalculator(startDate, endDate);
            }} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            appendToBody={true}
            />
        <div>{duration} days</div>
        <div>
          예약 확정 전에는 요금이 청구되지 않습니다.
        </div>
        <div>
        ₩{unitPrice} x {duration}박 = {totalPrice}원
        </div>
        


       </div>

      
      </>
    );
  }
}

export default Calendar;