import userConstants from '../constants/user.constants';

export const verified = (user) => {
    return{
        type: userConstants.LOGIN_SUCCESS,
        user: user
    }
}

export const failed = ()=>{
    return{
        type: userConstants.LOGIN_FAIL,
        user: {},
        errorMessage: "User information does not match system record!"
    }
}

export const logOut = ()=>{
    return{
        type: userConstants.LOGOUT
    }
}

