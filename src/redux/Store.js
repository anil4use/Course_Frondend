import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/UserReducer";
export const server = 'https://fsf-4mu9.onrender.com/api/v1'

const store = configureStore({
    reducer: {
        user: UserReducer
    }
})
export default store