import {
    Dimensions,
    Platform
} from 'react-native';

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