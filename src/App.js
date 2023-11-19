import logo from "./logo.svg";
import "./App.css";
// import ClassComponent from "./DemoComponent/ClassComponent";
// import FunctionComponent from "./DemoComponent/FunctionComponent";
// import Ex_Layout from "./Ex_Layout/Ex_Layout";
// import DataBinding from "./DataBinding/DataBinding";
// import DemoState from "./DemoComponent/DemoState/DemoState";
// import EventHandling from "./EventHandling/EventHandling";
// import Ex_Car from "./Ex_Car/Ex_Car";
// import RenderWithMap from "./RenderWithMap/RenderWithMap";
// import DemoProps from "./DemoProps/DemoProps";
// import Ex_Phone from "./Ex_Phone/Ex_Phone";
// import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";
// import ListShoe from "./Ex_Shoe/ListShoe";
// import DemoRedux from "./DemoRedux/DemoRedux";
// import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";
// import Ex_Tai_Xiu from "./Ex_Tai_Xiu/Ex_Tai_Xiu";
// import Shoe_Shop from "./Shoe_Shop/Shoe_Shop";
// import DemoLifeCycle from "./DemoLifeCyle/DemoLifeCycle";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home_page from "./Page/Home_Page/Home_page";
import Login_page from "./Page/Login_Page/Login_page";
import Header from "./Page/Home_Page/Header";
import NotFoundPage from "./Page/NotFoundPage";
import Dat_ve_phim from "./Dat_ve_phim/Dat_ve_phim";
import SeatBookingScreen from "./SeatBooking/SeatBooking";

function App() {
  // jsx : html + js
  return (
    <div className="">
      {/* <Shoe_Shop /> */}
      {/* <Ex_Shoe_Redux /> */}
      {/* <Ex_Tai_Xiu /> */}
      {/* <DemoLifeCycle /> */}
      {/* {router - Điều hướng} */}
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      {/* <Routes> */}
      {/* Liệt kê các Page */}
      {/* <Route path="/" element={<Home_page />} />
          <Route path="/login" element={<Login_page />} />
          <Route path="*" element={<NotFoundPage />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Dat_ve_phim />
      {/* <SeatBookingScreen /> */}
    </div>
  );
}

export default App;
