import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/slices/authSlice";
import productsReducer from "./features/slices/productsSlice";
import thunk from "redux-thunk" 

const reducer = combineReducers({
    authState: authReducer,
    productsState: productsReducer,
});

const store = configureStore({
    reducer,
    middleware: [thunk]
});

export default store;