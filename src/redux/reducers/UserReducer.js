import { createReducer } from "@reduxjs/toolkit";

export const UserReducer = createReducer({}, {
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthrizedAdmin = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;
        state.isAouthrizedAdmin = false;
        state.error = action.payload;  
    },
    cleareError: (state) => {
        state.error = null;
    },
    clearMessagge: (state) => {
        state.message = null
    },

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthrizedAdmin = true;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAouthrizedAdmin = false;
        state.error = action.payload;  
    },

})



