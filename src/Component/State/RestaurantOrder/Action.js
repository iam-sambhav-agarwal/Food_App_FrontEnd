import {
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    GET_RESTAURANTS_ORDERS_REQUEST,
    GET_RESTAURANTS_ORDERS_SUCCESS,
    GET_RESTAURANTS_ORDERS_FAILURE
} from "./ActionTypes"

import { api } from "../../Config/Api"

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })
            const response = await api.put(
                `/api/admin/order/${orderId}/${orderStatus}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }
            )
            const updatedOrder = response.data;
            console.log("updated order", updatedOrder)
            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder })

        } catch (error) {
            console.log("catch error", error)
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, error })
        }
    }
}

export const fetchRestaurantOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_RESTAURANTS_ORDERS_REQUEST })
            const { data } = await api.get(`/api/admin/order/restaurant/${restaurantId}`, {
                params: { order_status: orderStatus },
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
            )
            const orders = data;
            console.log("restaurant order---", orders)
            dispatch({
                type: GET_RESTAURANTS_ORDERS_SUCCESS, payload: orders
            })
        } catch (error) {
            console.log("error---", error)
            dispatch({
                type: GET_RESTAURANTS_ORDERS_FAILURE, payload: error
            })
        }
    }
}