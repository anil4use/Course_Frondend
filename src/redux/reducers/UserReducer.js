import { createReducer } from "@reduxjs/toolkit";

export const UserReducer = createReducer({}, {
    ///login user
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthenticated = true;
        state.adminRoute = true;
        state.user = action.payload.user;

        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;

        state.isAouthenticated = false;
        state.adminRoute = false;
        state.error = action.payload;
    },
    ///login user
    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    RegisterFail: (state, action) => {
        state.loading = false;
        state.isAouthenticated = false;
        state.error = action.payload;
    },
    //// logout user
    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutFail: (state, action) => {
        state.loading = false;
        state.isAouthenticated = true;
        state.error = action.payload;
    },
    //// check user login or not means Load User

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccuss: (state, action) => {
        state.loading = false;
        state.isAouthenticated = true;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAouthenticated = false;
        state.error = action.payload;
    },

    //// update password
    UpdatePasswordRequest: (state) => {
        state.loading = true;
    },
    UpdatePasswordSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    UpdatePasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //// update profile
    UpdateProfileRequest: (state) => {
        state.loading = true;
    },
    UpdateProfileSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    UpdateProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    ///////update profile picture
    UpdateProfilePhotoRequest: (state) => {
        state.loading = true;
    },
    UpdateProfilePhotoSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    UpdateProfilePhotoFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //ForgetPassword
    ForgetPasswordRequest: (state) => {
        state.loading = true;
    },
    ForgetPasswordSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ForgetPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //ResetPassword
    ResetPasswordRequest: (state) => {
        state.loading = true;
    },
    ResetPasswordSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ResetPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    // /ContactUs


    ContactUsRequest: (state) => {
        state.loading = true;
    },
    ContactUsSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ContactUsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    /// delete courses
    DeleteCourseRequest: (state) => {
        state.loading = true;
    },
    DeleteCourseSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    DeleteCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    ///AddLectures
    AddLectureRequest: (state) => {
        state.loading = true;
    },
    AddLectureSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    AddLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    ///AddLectures
    AddCommetsRequest: (state) => {
        state.loading = true;
    },
    AddCommetsSuccuss: (state, action) => {
        state.loading = false;
        state.comments = action.payload
    },
    AddCommetsFail: (state, action) => {
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


