import { createReducer } from "@reduxjs/toolkit";

export const SubscriptionReducer = createReducer({ }, {
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
    ///get comments
    getCommetsRequest: (state) => {
        state.loading = true;
    },

    getCommetsSuccuss: (state, action) => {
        state.loading = false;
        state.comments = action.comments
        state.CreateAT = action.CreateAT
        state.user = action.user
        state.lecture = action.lecture
    },
    getCommetsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // ///get all users
    // GetAllUsersRequest: (state) => {
    //     state.loading = true;
    // },
    // GetAllUsersSuccuss: (state, action) => {
    //     state.loading = false;
    //     state.users = action.payload
    // },
    // GetAllUsersFail: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    //// create course
    cleareError: (state) => {
        state.error = null;
    },
    clearMessagge: (state) => {
        state.message = null;
    },


})


