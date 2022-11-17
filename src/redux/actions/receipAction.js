import { receiptTypes } from "../types/receiptTypes";

// const initialState = []

export const receiptReset = (burgers) => {
    return {
        type: receiptTypes.reset,
        payload: burgers,
    };
}

export const receiptAddBurger = (burger) => {
    return {
        type: receiptTypes.addBurger,
        payload: burger,
    };
}