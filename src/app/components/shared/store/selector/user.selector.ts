import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectFeature = (state: AppState) => state.getusers;

export const selectUsers = createSelector(
  selectFeature,
  (state) => state.user
);
