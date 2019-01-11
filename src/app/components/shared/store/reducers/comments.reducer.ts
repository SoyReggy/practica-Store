import * as fromComments from '../actions/comments.action';
import { Comment } from '../../../../models/comment';

export interface State {
    loading: boolean;
    comments: Comment[];
    error: any;
}

const initialState: State = {
    loading: false,
    comments: null,
    error: null
};

export function reducer(state: State = initialState, action: fromComments.ActionsUnion ): State {
    switch (action.type) {
        case fromComments.ActionTypes.GETCOMMENTS: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case fromComments.ActionTypes.GETCOMMENTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        }

        case fromComments.ActionTypes.GETCOMMENTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        }
        default: {
            return state;
        }
    }
}
