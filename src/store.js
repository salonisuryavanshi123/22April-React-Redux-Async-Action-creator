
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { ADD_USER_DATA } from './_actions/actions';

let initialUserData = [
                        {
                            "id": 7,
                            "email": "michael.lawson@reqres.in",
                            "first_name": "Michael",
                            "last_name": "Lawson",
                            "avatar": "https://reqres.in/img/faces/7-image.jpg"
                        },
                        {
                            "id": 8,
                            "email": "lindsay.ferguson@reqres.in",
                            "first_name": "Lindsay",
                            "last_name": "Ferguson",
                            "avatar": "https://reqres.in/img/faces/8-image.jpg"
                        }
                    ]
                       

let rootReducer = (oldState=initialUserData,action)=>{
    let newState = oldState;
    switch(action.type){
        case 'GET_USER_DATA':
          return [
            ...newState,
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            }
          ];
        case ADD_USER_DATA:
          return [
            ...newState,
            ...action.payload
          ];
        default:
          return newState;
    }

    
}

export const store = createStore(rootReducer,initialUserData,applyMiddleware(thunk));