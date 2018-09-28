import {
    Dimensions,
    Platform,
    AsyncStorage
} from 'react-native';

export const APIKEY = `AIzaSyDk5jKEtGPo7OSQF8dykQcMHlcake-Bg2M`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`

export const getOrientation = (value) => {
    return Dimensions.get("window").height > value ? "portrait" : "landscape";
}

export const setOrientationListener = (cb) => {
    return Dimensions.addEventListener("change", cb);
}

export const removeOrientationListner = () => {
    return Dimensions.removeEventListener("change");
}

export const getPlatform = () => {
    if(Platform.OS === "ios")
        return "ios";
    else
        return "android";
}

export const getTokens = (cb) => {
    AsyncStorage.multiGet([
        '@aellitApp@token',
        '@aellitApp@refreshToken',
        '@aellitApp@expireToken',
        '@aellitApp@uid',
    ]).then(value => {
        cb(value);
    })
}

export const setTokens = (values, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);

    AsyncStorage.multiSet([
        ['@aellitApp@token', values.token],
        ['@aellitApp@refreshToken', values.refToken],
        ['@aellitApp@expireToken', expiration.toString()],
        ['@aellitApp@uid', values.uid],
    ]).then( response => {
        cb();
    });
}