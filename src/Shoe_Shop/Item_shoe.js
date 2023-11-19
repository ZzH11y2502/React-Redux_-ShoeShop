import React, { Component } from "react";
import { VIEW_DETAIL } from "./Constances/constance_shoe";
import { connect } from "react-redux";

class Item_shoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.shoeArr.map((item, index) => {
          return (
            <div className="col-3 card" key={index}>
              <img className="w-100" src={item.image} />
            </div>
          );
        })}
      </div>
    );
  }
}

// export default
let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     handleClickView(data) => {
//       let action = {
//         type: VIEW_DETAIL,
//         payload: dispatch,
//       }
//     },
//   }
// };

export default connect(mapStateToProps)(Item_shoe);
