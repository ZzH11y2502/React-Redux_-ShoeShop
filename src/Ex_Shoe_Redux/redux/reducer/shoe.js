import { shoeArr } from "../../../Ex_Shoe/data";
let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "ADD_TO_CART": {
      // spread operator
      // const newCart = [...this.state.cart, shoe]

      const newCart = [...state.cart];
      let shoe = action.payload;
      // Kiểm tra trong cart đã tồn tại sản phẩm hay chưa
      const index = newCart.findIndex((value) => value.id === shoe.id);

      if (index !== -1) {
        // sản phẩm đã có trong cart => chỉ thay đổi thuộc tính cartQuantity
        newCart[index].cartQuantity += 1;
      } else {
        // sản phẩm chưa có trong cart => thêm vào cart
        newCart.push({ ...shoe, cartQuantity: 1 });
      }

      state.cart = newCart;
      return { ...state };
    }
    case "CHECK_Quantity": {
      const newCart = [...state.cart];
      let shoeId = action.payload;
      let quantity = action.value;
      const index = newCart.findIndex((value) => value.id === shoeId);

      if (index !== -1) {
        newCart[index].cartQuantity =
          newCart[index].cartQuantity + quantity || 1;
        // 0 || 1
      }

      state.cart = newCart;
      return { ...state };
    }
    case "REMOVE_SHOE": {
      let idShoe = action.payload;
      // idShoe là id của item được click btn delete
      let newCart = [...state.cart];
      newCart = state.cart.filter((item) => {
        return item.id !== idShoe;
      });
      state.cart = newCart;
      return { ...state };
    }
    default:
      return state;
  }
};
