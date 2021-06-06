import React, { useRef } from "react";
import styled from "styled-components";
import LeftOff from "../../assets/LeftOff.svg";
import LeftOn from "../../assets/LeftOn.svg";
import RightOff from "../../assets/RightOff.svg";
import RightOn from "../../assets/RightOn.svg";

const CalendarWrap = styled.div`
  .calendar {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      height: 61px;
      &--left:hover,
      &--right:hover {
        cursor: pointer;
      }
      &--number {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }
    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;
      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

const Calendar = (props, location) => {
  const { currYear, setCurrYear, currMonth, setCurrMonth } = props;
  const isMain = location.pathname === "/" ? true : false;
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  //useRef를 사용하여 DOM 요소를 가져올 수 있는 변수를 선언
  const leftButton = useRef();
  const rightButton = useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            className="calendar__year--left"
            src={LeftOff}
            alt=""
            onClick={() => isMain && setCurrYear(currYear - 1)} //왼쪽 버튼을 누르면 현재 연도에서 -1을 한 값을 다시 저장
            onMouseEnter={() => (leftButton.current.src = LeftOn)} //마우스가 영역 안으로 들어올 경우, 아이콘을 변경
            onMouseLeave={() => (leftButton.current.src = LeftOff)}
            ref={leftButton}
          />
          <div className="calendar__year--number">{currYear}년</div>
          <img
            className="calendar__year--right"
            src={RightOff}
            alt=""
            onClick={() => isMain && setCurrYear(currYear + 1)}
            onMouseEnter={() => (rightButton.current.src = RightOn)}
            onMouseLeave={() => (rightButton.current.src = RightOff)}
            ref={rightButton}
          />
        </div>
        <div className="calendar__month">
          {monthList.map((month) => {
            return (
              <div
                key={month}
                className="calendar__month--button"
                onClick={() => isMain && setCurrMonth(month)}
                style={
                  month === currMonth
                    ? { fontSize: "22px", fontWeight: "bold" }
                    : {}
                }
              >
                {month + 1} 월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
