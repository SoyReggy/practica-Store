import { Comment } from '../../../../models/comment';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    GETCOMMENTS = '[Comment] Get Comments',
    GETCOMMENTS_SUCCESS = '[Comment] Get Comments Success',
    GETCOMMENTS_ERROR = '[Comment] Get Comments Error'
}

export class GetComments implements Action {
    readonly type = ActionTypes.GETCOMMENTS;
}

export class GetCommentsSuccess implements Action {
    readonly type = ActionTypes.GETCOMMENTS_SUCCESS;

    constructor(public payload: Comment[] ) {}
}

export class GetCommentsError implements Action {
    readonly type = ActionTypes.GETCOMMENTS_ERROR;

    constructor(public payload: any) {}
}

export type ActionsUnion = GetComments | GetCommentsSuccess | GetCommentsError;
