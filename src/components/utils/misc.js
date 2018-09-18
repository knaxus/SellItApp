import {
    Dimensions,
    Platform
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