import userConstants from '../constants/user.constants'


const initialUserState = {
    user: {},
    isLoggedIn: false,
    errorMessage: ""
}


function userLogin(state = initialUserState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS: {
            return {
                isLoggedIn: true,
                user: action.user
            }
        }
        case userConstants.LOGIN_FAIL: {
            return {
                isLoggedIn: false,
                errorMessage: action.errorMessage
            };
        }
        case userConstants.LOGOUT: {
            return {
                isLoggedIn: false,
                user: {}
            };
        }
        default:
            return state;
    }
}


export default userLogin;