import { CART_ADD_ITEM,CART_REMOVE_ITEM ,CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD} from '../constants/cartConstant'

import {ProductListAxios} from '../config/axios'


export const addToCart = (id,qty) =>  async (dispatch, getState) => {

    const {data} = await ProductListAxios.get(`/${id}`)

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))

}


export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({type:CART_REMOVE_ITEM,payload:id})

    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))
}
export const saveShippingAdress = (data) => async (dispatch,getState) => {
    dispatch({type:CART_SAVE_SHIPPING_ADDRESS,payload:data})
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}
export const savePaymentMethod = (data) => async (dispatch,getState) => {
    dispatch({type:CART_SAVE_PAYMENT_METHOD,payload:data})
    localStorage.setItem('paymentMethod ',JSON.stringify(data))
}