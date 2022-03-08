import { Action, createReducer, on } from '@ngrx/store';
import { AlbumModel } from '../models/album.model';
import * as fromAction from '../action/gallary.action';
export interface State {
  album: AlbumModel[];
}
export const initialState: State = {
  album: [],
};

export const AlbumReducer = createReducer(
  initialState,
  on(fromAction.GET_ALBUM, (state) => ({ ...state, album: state.album })),
  on(fromAction.ADD_ALBUM, (state, { payload }) => {
    debugger
    return { ...state, album: [...state.album, payload] };
  })
);
