import { server } from "../Store";
import axios from 'axios'
export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: "loginRequest" });
        const { data } = await axios.post(`${server}/login `, { email, password }, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true

            },
            withCredentials: true
        });

        dispatch({ type: 'loginSuccuss', payload: data })
    } catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message })
    }
}
///// register user  
export const RegisterUser = (formdata) => async dispatch => {
    try {
        dispatch({ type: "RegisterRequest" });
        const { data } = await axios.post(`${server}/register `, formdata, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'multipart/form-data',

            },
            withCredentials: true
        });
        // console.log(data)
        dispatch({ type: 'RegisterSuccuss', payload: data })
    } catch (error) {
        dispatch({ type: 'RegisterFail', payload: error.response.data.message })
    }
}

//// LOad user
export const LoadUser = () => async dispatch => {
    try {
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.get(`${server}/me `, {

            withCredentials: true
        });

        dispatch({ type: 'loadUserSuccuss', payload: data.user })
    } catch (error) {
        dispatch({ type: 'loadUserFail', payload: error.response.data.message })
    }
}
export const LogoutUser = () => async dispatch => {
    try {
        dispatch({ type: "logoutRequest" });
        const { data } = await axios.get(`${server}/logout `, {

            withCredentials: true
        });

        dispatch({ type: 'logoutSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'logoutFail', payload: error.response.data.message })
    }
}
    ;



///// update user
export const UpdateUser = (name, email) => async dispatch => {
    try {
        dispatch({ type: "UpdateProfileRequest" });
        const { data } = await axios.put(`${server}/updateprofile `, { name, email }, {
            headers: {
                'Content-type': 'application/json',
            },
            withCredentials: true
        });
        dispatch({ type: 'UpdateProfileSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'UpdateProfileFail   ', payload: error.response.data.message })
    }
}


/// photo update

export const UpdateProfilePhoto = (formdata) => async dispatch => {
    try {
        dispatch({ type: "UpdateProfilePhotoRequest" });
        const { data } = await axios.put(`${server}/updateprofilepicture `, formdata, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'multipart/form-data',


            },
            withCredentials: true
        });

        dispatch({ type: 'UpdateProfilePhotoSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'UpdateProfilePhotoFail', payload: error.response.data.message })
    }
}
////// updatePassword
export const UpdatePassword = (oldPassword, newPassword) => async dispatch => {
    try {
        dispatch({ type: "UpdatePasswordRequest" });
        const { data } = await axios.put(`${server}/changepassword `, { oldPassword, newPassword }, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',


            },
            withCredentials: true
        });

        dispatch({ type: 'UpdatePasswordSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'UpdatePasswordFail', payload: error.response.data.message })
    }
}               
////// forgetpassword

export const forgetPassward = email => async dispatch => {
    try {
        dispatch({ type: "ForgetPasswordRequest" });
        const { data } = await axios.post(`${server}/forgetpassword `, email, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
            },
            withCredentials: true
        });

        dispatch({ type: 'ForgetPasswordSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'ForgetPasswordFail', payload: error.response.data.message })
    }
}    

////// contact with us

export const ContactWithUs = (name, email, desc ) => async dispatch => {
    try {
        dispatch({ type: "ContactUsRequest" });
        const { data } = await axios.post(`${server}/contect `, {name, email, desc }, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
            },
            withCredentials: true
        });

        dispatch({ type: 'ContactUsSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'ContactUsFail', payload: error.response.data.message })
    }
}               
////// resetpassword

export const ResetPassword = (token,password) => async dispatch => {
    try {
        dispatch({ type: "ResetPasswordRequest" });
        const { data } = await axios.put(`${server}/resetepassword/${token} `, password, {
            headers: {
                Accept: "application/json",
                'Content-type': 'application/json',
            },
            withCredentials: true
        });

        dispatch({ type: 'ResetPasswordSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'ResetPasswordFail', payload: error.response.data.message })
    }
}               
///Delete Course admin
export const DeleteCourseAdmin = (id) => async dispatch => {
    try {
        dispatch({ type: "DeleteCourseRequest" });
        const { data } = await axios.delete(`${server}/course/${id}`, {

            withCredentials: true
        });

        dispatch({ type: 'DeleteCourseSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'DeleteCourseFail', payload: error.response.data.message })
    }
}
