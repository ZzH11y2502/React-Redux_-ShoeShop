import { LOSE, LUACHON, PLAYGAME, TAI, WIN, XIU } from "../Constant/xucXac";

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
  ketQua: null,
};

export const XucXac_reducer = (state = initialState, action) => {
  switch (action.type) {
    case LUACHON: {
      return { ...state, luaChon: action.payload };
    }
    case PLAYGAME: {
      // RANDOM 1-6
      let newXXArr = [];
      let tongDiem = 0;
      state.xucXacArr.forEach((item) => {
        let rnd = Math.floor(Math.random() * 6) + 1;
        newXXArr.push({
          img: `https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/${rnd}.png`,
          giatri: rnd,
        });
        tongDiem += rnd;
      });

      state.xucXacArr = newXXArr;
      if (
        (state.luaChon == TAI && tongDiem >= 11) ||
        (state.luaChon == XIU && tongDiem < 11)
      ) {
        // user win
        state.soLuotChoi++;

        state.ketQua = <p className="text-warning">WIN</p>;
        state.SoLuotThang++;
      } else {
        state.soLuotChoi++;

        state.ketQua = <p className="text-success">LOSE</p>;
      }
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
