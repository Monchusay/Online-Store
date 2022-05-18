import React from 'react';
import {addToCartActionCreator} from "../../../Redux/ProductListPageReducer";
import {connect} from "react-redux";
import ProductListItem from "./ProductListItem";

let MapStateToProps = (state) => {
    return {
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCartActionCreator(id))
        }
    }
}

const ProductListItemContainer = connect (MapStateToProps, MapDispatchToProps)(ProductListItem)

export default ProductListItemContainer