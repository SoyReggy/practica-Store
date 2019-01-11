import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectFeature = (state: AppState) => state.getposts;

export const selectPost = createSelector(
    selectFeature,
    (state) => state.post
);
