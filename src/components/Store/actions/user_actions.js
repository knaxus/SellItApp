import { 
    REGISTER_USER,
    SIGNIN_USER 
} from '../types';
import axios from 'axios';

import { SIGNUP, SIGNIN } from '../../utils/misc';

export function signIn(data) {
    const request = axios({
        method: "POST",
        url: SIGNIN,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.data;
    }).catch(err => {
        return false;
    });

    return {
        type: SIGNIN_USER,
        payload: request
    }
}

export function signUp(data) {
    const request = axios({
        method: "POST",
        url: SIGNUP,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers: {
            "Content-Type": "application/json"
        }
    }).then( response => {
        // console.log(response.data);
        return response.data;
    }).catch(err => {
        return false;
    });

    return {
        type: REGISTER_USER,
        payload: request
    }
}