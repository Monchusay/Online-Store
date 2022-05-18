let initialState = {
    ProductData: [
        {
            ProductName: "Product 1",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 1
        },
        {
            ProductName: "Product 2",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 2
        },
        {
            ProductName: "Product 3",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 3
        },
        {
            ProductName: "Product 4",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 4
        },
        {
            ProductName: "Product 5",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 5
        },
        {
            ProductName: "Product 6",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 6
        },
        {
            ProductName: "Product 7",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 7
        },
        {
            ProductName: "Product 8",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 8
        },
        {
            ProductName: "Product 9",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 9
        },
        {
            ProductName: "Product 10",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 10
        },
        {
            ProductName: "Product 11",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 11
        },
        {
            ProductName: "Product 12",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 12
        },
        {
            ProductName: "Product 13",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 13
        },
        {
            ProductName: "Product 14",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 14
        },
        {
            ProductName: "Product 15",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 15
        },
        {
            ProductName: "Product 16",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 16
        },
        {
            ProductName: "Product 17",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 17
        },
        {
            ProductName: "Product 18",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 18
        },
        {
            ProductName: "Product 19",
            Image: "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-two-cartons-stacking-goods-commodity-png-image_367984.jpg",
            Price: 69,
            id: 19
        },
    ],
    CartData: []
}

const ProductListPageReducer = (state=initialState,action) => {

    switch (action.type){
        case "ADD_TO_CART":
            let productIndex = state.ProductData.findIndex((p) => p.id === action.id);
            let newCartElement = {
                id: state.ProductData[productIndex].id,
                ProductName: state.ProductData[productIndex].ProductName,
                Image: state.ProductData[productIndex].Image,
                Price: state.ProductData[productIndex].Price
            }
            state.CartData.push(newCartElement)
            return state
    }
    return state;
}

export const addToCartActionCreator = (id) => {
    return {
        type: "ADD_TO_CART",
        id:id
    }
}

export default ProductListPageReducer