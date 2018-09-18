import { 
    REGISTER_USER,
    SIGNIN_USER 
} from '../types';

export default function(state={}, action) {
    switch(action.type) {
        case SIGNIN_USER:
            return {
                ...state,
                userData: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false,
                }
            }
        break;
        case REGISTER_USER:
            return {
                ...state, 
                userData: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false,
                }
            }
        break;
        default:
            return state;
    }
} 