import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/UserReducer";
import { CourseReducer } from "./reducers/CouseRducer";
import { AdminRducer } from "./reducers/AdminReducer";
import { SubscriptionReducer } from "./reducers/SubscriptionReducer";
// import { CourseReducer } from "./reducers/CouseRducer";
export const server = 'https://fsf-4mu9.onrender.com/api/v1'

const store = configureStore({
    reducer: {
        course:CourseReducer,
        user: UserReducer,
        admin:AdminRducer,
        payment:SubscriptionReducer,

        // updatreuser:updateReducer,
    },
    
})
export default store
