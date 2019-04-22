import {combineReducers} from 'redux';
import {LOGIN_SUCCESS} from '../actions';

function users(state = {}, action){
    if(!action) return state;
    
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
              ...state,
              data: action.payload
            //   [action.payload.id]: action.payload
            };
        default:
            return state;
    }
}

// function auth(state = null, action){
//   if(!action) return state;
  
//   switch(action.type){
//     case LOGIN_SUCCESS:
//       return action.payload.id;
//     case LOGOUT:
//       return null;
//     default:
//       return state;
//   }
// }


//Reducer

const rootReducer = combineReducers({
    users
})

export default rootReducer;