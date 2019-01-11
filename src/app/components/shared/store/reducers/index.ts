import * as fromuserreducer from '../reducers/user.reducer';
import * as frompostreducer from './post.reducer';
import * as fromcommentsreducer from './comments.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    getusers: fromuserreducer.State;
    getposts: frompostreducer.State;
    getcomments: fromcommentsreducer.State;
}

export const reducers: ActionReducerMap <AppState> = {
    getusers: fromuserreducer.reducer,
    getposts: frompostreducer.reducer,
    getcomments: fromcommentsreducer.reducer
};


