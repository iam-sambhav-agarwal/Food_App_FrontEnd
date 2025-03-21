import { api } from "../../Config/Api"

import {
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS,
    GET_USERS_ORDERS_FAILURE


} from "./ActionTypes"

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST })
        try {
            const { data } = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            })
            // if (data.payment_url) {
            //     window.location.hreaf = data.payment_url;
            // }
            console.log("created order data", data)
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
        }
    }
}

export const getUserOrders = (jwt) => {

    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDERS_REQUEST })
        try {
            const { data } = await api.get(`/api/order/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            })
            console.log("users order", data)
            dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data })

        } catch (error) {
            console.log("users order", error)
            dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error })
        }
    }
}