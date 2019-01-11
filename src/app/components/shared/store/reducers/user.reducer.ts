import * as fromUser from '../actions/users.action';
import { User } from '../../../../models/user';

export interface State {
    loading: boolean;
    user: User[];
    error: any;
}

const initialState: State = {
    loading: false,
    user: null,
    error: null
};

export function reducer(state: State = initialState, action: fromUser.ActionsUnion): State {
    switch (action.type) {
        case fromUser.ActionTypes.GETUSERS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUser.ActionTypes.GETUSERS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case fromUser.ActionTypes.GETUSERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default: {
            return state;
        }
    }
}
