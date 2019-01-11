import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectFeature = (state: AppState) => state.getcomments;

export const selectPost = createSelector(
    selectFeature,
    (state) => state.comments
);
