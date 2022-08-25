import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { IS_PRODUCTION } from "../constants/environments";
import userReducer from "./user/userSlice";

const createStore = () => {
    const rootReducer = combineReducers({
        // ToDo: Add slices
        user: userReducer,
    });


    return configureStore({
        reducer: rootReducer,
        devTools: !IS_PRODUCTION
    });
};

const store = createStore();

export default store;
