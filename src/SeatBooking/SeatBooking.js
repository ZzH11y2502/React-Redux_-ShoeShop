import React, { useState } from "react";

const timeArray = ["10:30", "12:30", "14:30", "15:00", "19:30", "21:00"];

const generateDate = () => {
  const date = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};
const generateSeats = () => {
  let numRow = 8;
  let numColumn = 3;
  let rowArray = [];
  let start = 1;
  let reachnine = false;

  for (let i = 0; i < numRow; i++) {
    let columnArray = [];
    for (let j = 0; j < numColumn; j++) {
      let seatObject = {
        number: start,
        taken: Boolean(Math.round(Math.random())),
        selected: false,
      };
      columnArray.push(seatObject);
      start++;
    }
    if (i === 3) numColumn += 2;
    if (numColumn < 9 && !reachnine) numColumn += 2;
    else {
      reachnine = true;
      numColumn -= 2;
    }
    rowArray.push(columnArray);
  }
  return rowArray;
};

const SeatBookingScreen = () => {
  const [dateArray] = useState(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState();
  const [price, setPrice] = useState(0);
  const [twoDSeatArray, setTwoDSeatArray] = useState(generateSeats());
  const [selectedSeatArray, setSelectedSeatArray] = useState([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState();

  const selectSeat = (index, subindex, num) => {
    if (!twoDSeatArray[index][subindex].taken) {
      let array = [...selectedSeatArray];
      let temp = [...twoDSeatArray];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(num)) {
        array.push(num);
        setSelectedSeatArray(array);
      } else {
        const tempindex = array.indexOf(num);
        if (tempindex > -1) {
          array.splice(tempindex, 1);
          setSelectedSeatArray(array);
        }
      }
      setPrice(array.length * 5.0);
      setTwoDSeatArray(temp);
    }
  };

  const BookSeats = () => {
    if (
      selectedSeatArray.length !== 0 &&
      timeArray[selectedTimeIndex] !== undefined &&
      dateArray[selectedDateIndex] !== undefined
    ) {
      // Handle storage in React, e.g., localStorage.setItem()
      console.log("Seats booked successfully");
    } else {
      alert("Please Select Seats, Date, and Time of the Show");
    }
  };

  return (
    <div className="seat-booking-container">
      {/* Include any necessary header components */}
      <div className="seat-container">
        <div className="seat-row">
          {twoDSeatArray.map((item, index) => (
            <div key={index} className="seat-row">
              {item.map((subitem, subindex) => (
                <button
                  key={subitem.number}
                  onClick={() => selectSeat(index, subindex, subitem.number)}
                  className={`seat-icon ${subitem.taken ? "grey" : ""} ${
                    subitem.selected ? "orange" : ""
                  }`}
                >
                  {subitem.number}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="seat-radio-container">
          <div className="radio-container">
            <div className="radio-icon orange"></div>
            <span className="radio-text">Selected</span>
          </div>
          <div className="radio-container">
            <div className="radio-icon grey"></div>
            <span className="radio-text">Taken</span>
          </div>
          <div className="radio-container">
            <div className="radio-icon orange"></div>
            <span className="radio-text">Available</span>
          </div>
        </div>
      </div>

      {/* Include Date and Time selection components, e.g., buttons or dropdowns */}
      <button onClick={BookSeats}>Buy Tickets</button>
    </div>
  );
};

export default SeatBookingScreen;
