import { createReducer } from "@reduxjs/toolkit";

export const SubscriptionReducer = createReducer({}, {
////buy subscription
    buySubscriptionRequest: (state) => {
        state.loading = true;
    },
    buySubscriptionSuccuss: (state, action) => {
        state.loading = false;
        state.subscriptionId = action.payload;
    },
    buySubscriptionFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;  
    },
////           cancel        subscription
    cancelSubscriptionRequest: (state) => {
        state.loading = true;
    },
    cancelSubscriptionSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    cancelSubscriptionFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;  
    },
  
    cleareError: (state) => {
        state.error = null;
    },
    clearMessagge: (state) => {
        state.message = null;
    },
 

})


  