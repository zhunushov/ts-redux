import { UserState, UserAction, UserActionTypes } from './../../types/types';

const INIT_STATE: UserState  ={
   user: [],
   error: null,
   loading: false,
   edit: {},
   pagination: 1
}

export const userReducer = (state = INIT_STATE, action: UserAction ): UserState => {
    switch(action.type){
        case UserActionTypes.GET_USERS:
            return {...state, loading: true}
        case UserActionTypes.GET_USERS_SUCCESS:
            return {...state, loading: false, user: action.payload}
        case UserActionTypes.GET_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.GET_USERS_UPDATE:
            return {...state, loading: false, edit: action.payload}
        default: return state
    }
}