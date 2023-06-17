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


    ///// add to play list


    AddToPlayListRequest: (state) => {
        state.loading = true;
    },
    AddToPlayListSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    AddToPlayListFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    ///// remove from list

    RemoveFromPlayListRequest: (state) => {
        state.loading = true;
    },
    RemoveFromPlayListSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    RemoveFromPlayListFail: (state, action) => {
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


