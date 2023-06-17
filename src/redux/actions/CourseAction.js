import { server } from "../Store";
import axios from 'axios'

export const getAllCourse = (category="",keyword="") => async dispatch => {
    try {
        dispatch({ type: "getallCourseRequest" });
        const { data } = await axios.get(
            `${server}/course?keyword=${keyword}&category=${category} `
        );

        dispatch({ type: 'getallCourseSuccuss', payload: data.courses })
    } catch (error) {
        dispatch({ type: 'getallCourseFail', payload: error.response.data.message })
    }
};

//// add to playlist
export const AddToPlayList = id => async dispatch => {
    try {
        dispatch({ type: "AddToPlayListRequest" });
        const { data } = await axios.post(`${server}/addtoplaylist `,id, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
              
            },
            withCredentials: true
        });
        dispatch({ type: 'AddToPlayListSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'AddToPlayListFail', payload: error.response.data.message })
    }
};


//////remove from playlist


export const RemoveFromPlayList = (id) => async dispatch => {
    try {
        dispatch({ type: "RemoveFromPlayListRequest" });
        const { data } = await axios.delete(`${server}/removeplaylist?id=${id} `, {
          
            withCredentials: true
        });
        dispatch({ type: 'RemoveFromPlayListSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'RemoveFromPlayListFail', payload: error.response.data.message })
    }
};
//////RequestCourses


export const RequestCourses = (name, email, course) => async dispatch => {
    try {
        dispatch({ type: "RequestCourseRequest" });
        const { data } = await axios.post(`${server}/coureserequest`,{name, email, course}, {
            headers: {
                // Accept: "application/json",
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            withCredentials: true
        });
        dispatch({ type: 'RequestCourseSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'RequestCourseFail', payload: error.response.data.message })
    }
};
/// only subscriber watch 
export const getCourseLacture =id => async dispatch => {
    try {
        dispatch({ type: "getCourseRequest" });
        const { data } = await axios.get(`${server}/course/${id}`, {
        
            withCredentials: true
        });
        dispatch({ type: 'getCourseSuccuss', payload: data.lectures })
    } catch (error) {
        dispatch({ type: 'getCourseFail', payload: error.response.data.message })
    }
};
///detele lectures Admin
export const DeleteLectureAdmin = (courseId, lecturesId) => async dispatch => {
    try {
        dispatch({ type: "DeleteLectureRequest" });
        const { data } = await axios.delete(`${server}/lecture?courseId=${courseId}&lecturesId=${lecturesId} `, { courseId, lecturesId }, {
        
            withCredentials: true
        });

        dispatch({ type: 'DeleteLectureSuccuss', payload: data.message })
    } catch (error) {
        dispatch({ type: 'DeleteLectureFail', payload: error.response.data.message })
    }
}