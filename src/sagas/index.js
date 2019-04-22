import {logIn} from '../utils/services';
import {take, put, fork, call, race} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions';
import * as actions from '../actions'
import {loginRequest, loginError, loginSuccess} from './actions';
// import {startSubmit, stopSubmit} from '../form/actions';
// import {clearState} from '../router/actions';



function* fetchPost(email, password) {
    yield put(loginRequest(email, password));
    const post = yield call(logIn, email, password);
    yield put(loginSuccess, post);
}
// function* handleLoginSubmit(){
//     // run the daemon
//     while(true){
//         // wait for a login submit
//         var {payload} = yield take(LOGIN_SUBMIT);
//         // start submitting the form
//         yield put(startSubmit("authLogin"));
//         // put a login request
//         yield put(loginRequest(payload));
//         // wait for a response
//         var {error, success} = yield race({
//             success: take(LOGIN_SUCCESS),
//             error: take(LOGIN_FAILURE)
//         });
//         // if not an error, pop the screen
//         if(!error){
//             // finalize the form
//             yield put(stopSubmit("authLogin"));
//             yield put(clearState());
//         }else{
//             // finalize the form
//             yield put(stopSubmit("authLogin", error.payload));
//         }
//     }
// }

// function* handleLoginRequest(){
//     // run the daemon
//     while(true){
//         try{
//             // wait for a login request
//             var {payload} = yield take(LOGIN_REQUEST);
//             // call the api
//             var user = yield call(login, payload);
//             // call the success
//             yield put(loginSuccess(user));
//         }catch(e){
//             // call the error
//             yield put(loginError(e));
//         }
//     }
// }

// export default function* auth(getState){
//     yield fork(handleLoginRequest);
//     yield fork(handleLoginSubmit);
// }


export default function* root() {
   yield fork(fetchPost);
}