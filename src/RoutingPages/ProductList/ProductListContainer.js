import React from "react"
import {connect} from "react-redux";
import ProductList from "./ProductList";

let MapStateToProps = (state) => {
    return {
        ProductData: state.ProductListPage.ProductData
    }
}
let MapDispatchToProps = (dispatch) => {
    return {

    }
}

const ProductListContainer = connect (MapStateToProps, MapDispatchToProps)(ProductList)

export default ProductListContainer