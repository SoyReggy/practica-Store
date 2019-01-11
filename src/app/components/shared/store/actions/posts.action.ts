import { Post } from '../../../../models/post';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    GETPOSTS = '[Post] Get Post',
    GETPOSTS_SUCCESS = '[Post] Get Post Success',
    GETPOSTS_ERROR = '[Post] Get Post Error'
}

export class GetPosts implements Action {
    readonly type = ActionTypes.GETPOSTS;
}

export class GetPostsSuccess implements Action {
    readonly type = ActionTypes.GETPOSTS_SUCCESS;

    constructor(public payload: Post[] ) {}
}

export class GetPostsError implements Action {
    readonly type = ActionTypes.GETPOSTS_ERROR;

    constructor(public payload: any) {}
}

export type ActionsUnion = GetPosts | GetPostsSuccess | GetPostsError;
