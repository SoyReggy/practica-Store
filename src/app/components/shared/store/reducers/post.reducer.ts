import * as fromPost from '../actions/posts.action';
import { Post } from '../../../../models/post';

export interface State {
    loading: boolean;
    post: Post[];
    error: any;
}

const initialState: State = {
    loading: false,
    post: null,
    error: null
};

export function reducer(state: State = initialState, action: fromPost.ActionsUnion): State {
    switch (action.type) {
        case fromPost.ActionTypes.GETPOSTS: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case fromPost.ActionTypes.GETPOSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        }

        case fromPost.ActionTypes.GETPOSTS_ERROR: {
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
