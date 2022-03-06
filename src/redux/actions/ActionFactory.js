import { ActionTypes } from "../../constants/ActionTypes";

export const setProducts = (payload) =>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload:payload
    }
}


