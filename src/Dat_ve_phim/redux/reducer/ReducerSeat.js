import { chairList } from "../../chairList";
import {
  ChairConfirm,
  Confirm,
  InputSeat,
  Purchase,
} from "../Constants/Constants";

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
        (item) => item.soGhe === chair.soGhe
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
      const inputName = document.querySelector("#inputName").value;
      const chairNumber = document.querySelector("#chairsNumber").value;

      // Update state
      state.ticketCart = [...newticketCart];
      state.nameCustomer = inputName;
      state.seatsInput = chairNumber;
      return { ...state };
    }
    case Confirm: {
      const newticketCart = [...state.ticketCart];

      const nameCustomer = state.nameCustomer;
      const seatsInput = state.seatsInput;
      let ticketNumber = "";
      newticketCart.map((ticket) => {
        return (ticketNumber = ticketNumber + " " + ticket.soGhe);
      });
      let tongTien = 0;
      newticketCart.map((ticket) => {
        return (tongTien += ticket.gia);
      });
      // DOM to Thong tin khach hang
      document.querySelector(".nameCustomer").innerHTML = nameCustomer;
      document.querySelector(".numberSeats").innerHTML = seatsInput;
      document.querySelector(".seatCode").innerHTML = ticketNumber;
      document.querySelector(".tinhTien").innerHTML = tongTien + " VNĐ";
      return { ...state };
    }
    case Purchase: {
      alert("Thanh toán thành công");
    }
    default: {
      return state;
    }
  }
};
