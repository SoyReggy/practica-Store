import { Action } from '@ngrx/store';
import { User } from '../../../../models/user';


export enum ActionTypes {
    GETUSERS = '[User] Get User',
    GETUSERS_SUCCESS = '[User] Get User Success',
    GETUSERS_ERROR = '[User] Get User Error'
}

export class GetUsers implements Action {
    readonly type = ActionTypes.GETUSERS;
}

export class GetUsersSuccess implements Action {
    readonly type = ActionTypes.GETUSERS_SUCCESS;

    constructor(public payload: User[]) {}
}

export class GetUsersError implements Action {
    readonly type = ActionTypes.GETUSERS_ERROR;

    constructor(public payload: any) {}
}

export type ActionsUnion = GetUsers | GetUsersSuccess | GetUsersError;
