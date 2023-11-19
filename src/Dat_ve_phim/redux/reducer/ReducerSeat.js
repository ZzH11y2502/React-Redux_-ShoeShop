import { chairList } from "../../chairList";
import { ChairConfirm, Confirm, InputSeat } from "../Constants/Constants";

let initialState = {
  seatsInput: 0,
  ticketCart: [],
  chairList: chairList,
  nameCustomer: "",
};

export const seatHandler = (state = initialState, action) => {
  switch (action.type) {
    case InputSeat: {
      const newchairList = [...state.chairList];
      const newticketCart = [...state.ticketCart];
      const seatsInput = state.seatsInput;
      var chair = action.payload;
      chair.dangChon = true;

      // Check element on chairList
      const index = newticketCart.findIndex(
        (item) => item.soGhe == chair.soGhe
      );

      console.log(chair);
      if (index == -1) {
        newticketCart.push(chair);
      }

      // Add a click event listener to each element
      const seatsElements = document.querySelectorAll(".seats");
      seatsElements.forEach((element, index) => {
        element.addEventListener("click", (event) => {
          // Change the background color of the clicked element
          element.style.backgroundColor = "green";
        });
      });
      console.log(chair.dangChon ? chair.dangChon.toString() : "false");

      // Update state
      state.chairList = newchairList;
      state.ticketCart = newticketCart;
      console.log(
        "🚀 ~ file: ReducerSeat.js:40 ~ seatHandler ~ newticketCart:",
        newticketCart
      );
      return { ...state };
    }
    case ChairConfirm: {
      const newticketCart = [...state.ticketCart];
      const nameCustomer = state.nameCustomer;
      const seatsInput = state.seatsInput;
      const inputName = document.getElementById("inputName").value;

      const chairNumber = document.querySelector("#chairsNumber").value;
      console.log(
        "🚀 ~ file: ReducerSeat.js:50 ~ seatHandler ~ chairNumber:",
        chairNumber
      );

      // Update state
      state.ticketCart = [...newticketCart];
      state.nameCustomer = inputName;
      state.seatsInput = seatsInput;
      return { ...state };
    }
    case Confirm: {
      const newticketCart = [...state.ticketCart];
      const nameCustomer = state.nameCustomer;
      const seatsInput = state.seatsInput;
    }
    default: {
      return state;
    }
  }
};
