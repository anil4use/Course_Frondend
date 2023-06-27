import { createReducer } from "@reduxjs/toolkit";

export const CourseReducer = createReducer({ courses: [], lectures: [] }, {
    ///Couse
    getallCourseRequest: (state) => {
        state.loading = true;
    },
    getallCourseSuccuss: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
    },
    getallCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    ///only subscriber watch lecture
    getCourseRequest: (state) => {
        state.loadingg = true;
    },
    getCourseSuccuss: (state, action) => {
        state.loadingg = false;
        state.lectures = action.payload;
    },
    getCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    /// ad to watchlist
    AdToWatchlistRequest: (state) => {
        state.loading = true;
    },
    AdToWatchlistSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    AdToWatchlistFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


 
 

    ///        RequestCourse list


    RequestCourseRequest: (state) => {
        state.loading = true;
    },
    RequestCourseSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    RequestCourseFail: (state, action) => {
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


