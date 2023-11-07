import React, { Component } from 'react'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import { shoeArr } from './data'

export default class Ex_Shoe extends Component {
    state = {
        shoeArr: shoeArr,
        detail: shoeArr[0],
        // cart: shoeArr,
        cart: [],
    }
    handleViewDetail = (shoe) => {
        this.setState({
            detail: shoe,
        })
    }
    handleRemove = (idShoe) => {
        // idShoe là id của item được click btn delete
        let newCart = this.state.cart.filter((item) => {
            return item.id !== idShoe
        })
        this.setState({ cart: newCart })
    }

    handleCart = (shoe) => {
        // spread operator
        // const newCart = [...this.state.cart, shoe]

        const newCart = this.state.cart

        // Kiểm tra trong cart đã tồn tại sản phẩm hay chưa
        const index = newCart.findIndex((value) => value.id === shoe.id)

        if (index !== -1) {
            // sản phẩm đã có trong cart => chỉ thay đổi thuộc tính cartQuantity
            newCart[index].cartQuantity += 1
        } else {
            // sản phẩm chưa có trong cart => thêm vào cart
            newCart.push({ ...shoe, cartQuantity: 1 })
        }

        console.log('newCart: ', newCart)

        this.setState({
            cart: newCart,
        })
    }

    // quantity: +1 | -1
    handleCartQuantity = (shoeId, quantity) => {
        console.log('shoeId: ', shoeId)
        console.log('quantity: ', quantity)

        // falsy: 0, '', undefined, NaN, false, null => false
        // truthy: => true
        // A || B
        // 0 || 1 => 1
        // 1 || 2 => 1
        const newCart = [...this.state.cart]

        const index = newCart.findIndex((value) => value.id === shoeId)

        if (index !== -1) {
            newCart[index].cartQuantity = newCart[index].cartQuantity + quantity || 1
            // 0 || 1
        }

        this.setState({
            cart: newCart,
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <CartShoe
                        handleRemove={this.handleRemove}
                        cart={this.state.cart}
                        handleCartQuantity={this.handleCartQuantity}
                    />
                </div>
                <div className="col-6">
                    <ListShoe
                        handleViewDetail={this.handleViewDetail}
                        list={this.state.shoeArr}
                        handleCart={this.handleCart}
                    />
                </div>
                <div className="col-12">
                    <DetailShoe detail={this.state.detail} />
                </div>
            </div>
        )
    }
}
