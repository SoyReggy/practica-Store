import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as frompost from '../actions/posts.action';
import { PostService } from '../../../../services/post.service';

@Injectable()
export class PostEffects {
    @Effect()
    post$: Observable<Action> = this.actions$.pipe(
        ofType(frompost.ActionTypes.GETPOSTS),
        mergeMap(action =>
            this.postService.getPosts().pipe(
                map(data => ({ type: frompost.ActionTypes.GETPOSTS_SUCCESS , payload: data })),
                catchError(() => of({ type: frompost.ActionTypes.GETPOSTS_ERROR }))
            )
        )
    );



    constructor(
        private actions$: Actions, private postService: PostService
    ) { }
}
