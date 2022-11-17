import { receiptTypes } from "../types/receiptTypes"

const burgers = []

export const receiptReducer = (state = { burgers }, action) => {
    switch (action.type) {
        case receiptTypes.reset:
            return {
                ...state,
                burgers: action.payload
            }
        case receiptTypes.addBurger:
            return {
                ...state,
                burgers: action.payload
            }
        default:
            return state
    }


}