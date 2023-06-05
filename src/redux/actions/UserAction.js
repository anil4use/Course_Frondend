import { server } from "../Store";
import  axios from 'axios' 
export const login=(email,password)=>async dispatch=>{
    try {
        dispatch({type:"loginRequest"});
        const {data} = await axios.post(`${server}/login `,{email,password},{
            headers:{
                // Accept: "application/json",
                   'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
                
            },
            withCredentials:true
        });
        console.log(data)
        dispatch({type:'loginSuccuss',payload:data})
    } catch (error) {
        dispatch({type:'loginFail',payload:error.response.data.message})
    }
}               
export const LoadUser=()=>async dispatch=>{
    try {
        dispatch({type:"loadUserRequest"});
        const {data} = await axios.get(`${server}/me `,{
       
            withCredentials:true
        });
        console.log(data)
        dispatch({type:'loadUserSuccuss',payload:data.user})
    } catch (error) {
        dispatch({type:'loadUserFail',payload:error.response.data.message})
    }
}               