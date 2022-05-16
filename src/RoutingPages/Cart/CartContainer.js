import React, {useState} from "react"
import {connect} from "react-redux";
import Cart from "./Cart";

let MapStateToProps = (state) => {
    return {
        CartData: state.ProductListPage.CartData,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
    }
}

const CartContainer = connect (MapStateToProps,MapDispatchToProps) (Cart)

export default CartContainer