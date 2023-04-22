import axios from "axios";
import { URL } from "../helper/helper";
import { ADD_USER_DATA } from "../_actions/actions";
 

export const getUserData = ()=>{
    return (dispatch)=>{
        //API CALLING
        //Lets involve the time here
        //Lets simulate the time taking here..
        axios.get(URL+'/api/users?page=2')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            dispatch({type:ADD_USER_DATA,payload:response.data.data});
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        /*setTimeout(()=>{
            dispatch({type:GET_USER_DATA});
        },3000);*/
    }
}