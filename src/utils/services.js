import webservices from './index';
import {setSESSION, SESSION_NAME} from './session';
import jwt from 'jsonwebtoken';

export const logIn = (email, password) => {
    webservices.post('/login', {email, password})
        .then(rs => {
            let token = rs.data.accessToken;
            let jwtObj = jwt.decode(token, {complete: true});
            setSESSION(SESSION_NAME.token, token)
            setSESSION(SESSION_NAME.USER, jwtObj.payload)
        })
        .catch(err => console.log(err))
}