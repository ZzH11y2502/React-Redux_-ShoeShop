import React, { Component } from "react";
import { connect } from "react-redux";

class CartShoe extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{
                      width: 50,
                    }}
                    src={item.image}
                    alt=""
                  />
                </td>

                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      {
                        this.props.handleCartQuantity(item.id, 1);
                      }
                    }}
                  >
                    +
                  </button>
                  <span className="mx-3">{item.cartQuantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.handleCartQuantity(item.id, -1);
                    }}
                  >
                    -
                  </button>
                </td>

                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      {
                        this.props.handleRemove(item.id);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCartQuantity: (item, value) => {
      let action = {
        type: "CHECK_Quantity",
        payload: item,
        value: value,
      };
      dispatch(action);
    },
    handleRemove: (item) => {
      let action = {
        type: "REMOVE_SHOE",
        payload: item,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
