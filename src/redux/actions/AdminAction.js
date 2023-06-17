import { server } from "../Store";
import axios from 'axios'

///Create Course 

export const CreateCourses = (formdata) => async dispatch => {
    try {
        dispatch({ type: "CreateCourseRequest" });
        const { data } = await axios.post(
            `${server}/createcourse `, formdata, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true
        }
        );

        dispatch({ type: 'CreateCourseSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'CreateCourseFail', payload: error.response.data.message })
    }
};
///get All users
export const GetAllUsersAdmin = () => async dispatch => {
    try {
        dispatch({ type: "GetAllUsersRequest" });
        const { data } = await axios.get(`${server}/admin/getAllUsers `, {

            withCredentials: true
        });

        dispatch({ type: 'GetAllUsersSuccuss', payload: data.users })
    } catch (error) {
        dispatch({ type: 'GetAllUsersFail', payload: error.response.data.message })
    }
}
///Add lectures Admin
export const AddLectureAdmin = (id, formdata) => async dispatch => {
    try {
        dispatch({ type: "AddLectureRequest" });
        const { data } = await axios.post(`${server}/course/${id} `, formdata, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            withCredentials: true
        });
        dispatch({ type: 'AddLectureSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'AddLectureFail', payload: error.response.data.message })
    }
}
///Delete User Admin
export const DeleteUserAdmin = (id) => async dispatch => {
    try {
        dispatch({ type: "DeleteUserRequest" });
        const { data } = await axios.delete(`${server}/admin/delete/${id} `, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            withCredentials: true
        });
        dispatch({ type: 'DeleteUserSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'DeleteUserFail', payload: error.response.data.message })
    }
}
///Change User Role
export const ChangeUserRoleAdmin = (id) => async dispatch => {
    try {
        dispatch({ type: "ChangeUserRoleRequest" });
        const { data } = await axios.put(`${server}/admin/updateUserRole/${id} `, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            withCredentials: true
        });
        dispatch({ type: 'ChangeUserRoleSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'ChangeUserRoleFail', payload: error.response.data.message })
    }
}
///Change User Role
export const AdminStatsDATA = () => async dispatch => {
    try {
        dispatch({ type: "GetAdminStastRequest" });
        const { data } = await axios.get(`${server}/admin/stats`, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            withCredentials: true
        });
        dispatch({ type: 'GetAdminStastSuccuss', payload: data })
    } catch (error) {
        dispatch({ type: 'GetAdminStastFail', payload: error.response.data.message })
    }
}

