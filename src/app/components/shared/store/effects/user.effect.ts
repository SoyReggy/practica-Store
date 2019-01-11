import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromuser from '../actions/users.action';
import { UserService } from '../../../../services/user.service';

@Injectable()
export class UserEffects {
    @Effect()
    user$: Observable<Action> = this.actions$.pipe(
        ofType(fromuser.ActionTypes.GETUSERS),
        mergeMap(action =>
            this.userService.getUsers().pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: fromuser.ActionTypes.GETUSERS_SUCCESS , payload: data })),
                // If request fails, dispatch failed action
                catchError(() => of({ type: fromuser.ActionTypes.GETUSERS_ERROR }))
            )
        )
    );



    constructor(
        private actions$: Actions, private userService: UserService
    ) { }
}
