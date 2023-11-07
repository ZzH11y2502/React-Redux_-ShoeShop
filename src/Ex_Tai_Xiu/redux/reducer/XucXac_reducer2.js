import { LUACHON, PLAYGAME } from "../Constant/xucXac";

let initialState = {
  xucXacArr: [
    {
      img: "https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/1.png",
      giatri: 1,
    },
    {
      img: "https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/2.png",
      giatri: 2,
    },
    {
      img: "https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/3.png",
      giatri: 3,
    },
    // {
    //   img: "https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/4.png",
    //   giatri: 4,
    // },
    // {
    //   img: "https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/5.png",
    //   giatri: 5,
    // },
    // {
    //   giatri: 6,
    // },
  ],
  luaChon: null,
  soLuotChoi: 0,
  SoLuotThang: 0,
};

export const XucXac_reducer = (state = initialState, action) => {
  switch (action.type) {
    case LUACHON: {
      return { ...state, luaChon: action.payload };
    }
    case PLAYGAME: {
      // RANDOM 1-6
      let newXXArr = [];
      state.xucXacArr.forEach((item) => {
        let rnd = Math.floor(Math.random() * 6) + 1;
        newXXArr.push({
          img: `https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/${rnd}.png`,
          giatri: rnd,
        });
      });
      state.xucXacArr = newXXArr;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
