import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromcomments from '../actions/comments.action';
import { CommentsService } from '../../../../services/comments.service';

@Injectable()
export class CommentsEffects {
    @Effect()
    comments$: Observable<Action> = this.actions$.pipe(
        ofType(fromcomments.ActionTypes.GETCOMMENTS),
        mergeMap(action =>
            this.commentsService.getComments().pipe(
                map(data => ({ type: fromcomments.ActionTypes.GETCOMMENTS_SUCCESS , payload: data })),
                catchError(() => of({ type: fromcomments.ActionTypes.GETCOMMENTS_ERROR }))
            )
        )
    );



    constructor(
        private actions$: Actions, private commentsService: CommentsService
    ) { }
}
