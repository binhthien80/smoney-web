//some action ...
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_REQUEST =  'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR' ;

export const loginSubmit = (data) => {
    return {
        type: LOGIN_SUBMIT,
        payload: data
    };
}

export const loginRequest = (email, password) => {
    return {
        type: LOGIN_REQUEST,
        payload: { email, password }
    }
}

export const loginSuccess = (email, password) => {
    return {
        type: LOGIN_SUCCESS,
        payload: { email, password }
    }
}

export const loginError = errors => {
    return {
        type: LOGIN_ERROR,
        errors: true,
        payload: errors
    }
}