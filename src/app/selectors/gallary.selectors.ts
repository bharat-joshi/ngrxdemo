import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromStore from '../reducers/gallary.reducer';


export const getGallaryState = createFeatureSelector<fromStore.State>('gallaryList')

export const selectGallarylist = createSelector(getGallaryState,(state:fromStore.State)=>state.album)
export const getMessage = createSelector(getGallaryState,(state:fromStore.State)=> state.isLoading)
