import { createReducer } from "@reduxjs/toolkit";

export const AdminRducer = createReducer({ users: [] }, {
    ///get all users
    GetAllUsersRequest: (state) => {
        state.loading = true;
    },
    GetAllUsersSuccuss: (state, action) => {
        state.loading = false;
        state.users = action.payload
    },
    GetAllUsersFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //// create course

    CreateCourseRequest: (state) => {
        state.loading = true;
    },
    CreateCourseSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    CreateCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    ///DeleteLecture
    DeleteLectureRequest: (state) => {
        state.loading = true;
    },
    DeleteLectureSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    DeleteLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload},

    ///Delete User Admin

    DeleteUserRequest: (state) => {
        state.loading = true;
    },
    DeleteUserSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    DeleteUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    /// ChangeUserRole Admin

    ChangeUserRoleRequest: (state) => {
        state.loading = true;
    },
    ChangeUserRoleSuccuss: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    ChangeUserRoleFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    /// GetAdminStast Admin


    GetAdminStastRequest: (state) => {
        state.loading = true;
    },
    GetAdminStastSuccuss: (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats
        state.userCount = action.payload.userCount
        state.userViews = action.payload.userViews
        state.userSubscription = action.payload.userSubscription
        state.subscriptionPercentage = action.payload.subscriptionPercentage
        state.viewsParcentage = action.payload.viewsParcentage
        state.userParcentage = action.payload.userParcentage
        state.userProfit = action.payload.userProfit
        state.viewsProfit = action.payload.viewsProfit
        state.subscriptionProfit = action.payload.subscriptionProfit
    },
    GetAdminStastFail: (state, action) => {
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






