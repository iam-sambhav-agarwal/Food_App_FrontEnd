import axios from "axios";
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, GET_USER_REQUEST, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_SUCCESS, LOGOUT, LOGOUT_SUCCESS, REGISTER_FAILURE, LOGIN_FAILURE, GET_USER_FAILURE, ADD_TO_FAVORITE_FAILURE
} from "./ActionTypes"
import { API_URL, api } from "../../Config/Api"

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurants")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
        console.log("Register success", data)
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        console.log("error", error)
    }

}

export const loginUser = (reqData) => async (dispatch) => {
    console.log("Login User", reqData)
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        console.log("Login User api data", data)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurants")
        } else {
            reqData.navigate("/")
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
        console.log("Login success", data)
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
        console.log("error", error)
    }

}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({ type: GET_USER_SUCCESS, payload: data })
        console.log("user profile", data)

    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error })
        console.log("error", error)
    }

}

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })
    try {
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data })
        console.log("add to favorite", data)

    } catch (error) {
        console.log("Add to favorite error", error)
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error })

    }

}
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT_SUCCESS })
        console.log("logout success")

    } catch (error) {
        console.log("error", error)
    }

}