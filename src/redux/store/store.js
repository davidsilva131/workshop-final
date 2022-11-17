import { receiptReducer } from '../reducers/receiptReducer'
const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
    receipt: receiptReducer
};
const store = configureStore({
    reducer,
});

export default store;