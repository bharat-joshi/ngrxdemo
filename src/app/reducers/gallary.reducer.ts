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
  on(fromAction.ADD_ALBUM, (state, { payload }) => ({
    ...state,
    album: [...state.album, payload],
  })),
  on(fromAction.DELETE_ALBUM, (state, { albumId }) => ({
    ...state,
    album: [...state.album.filter((x) => x.albumId != albumId)],
  })),
  on(fromAction.UPDATE_ALBUM, (state, { albumId, payload }) => {
    return {
      ...state,
      album: [...state.album.map((element:any) => {
           if(element.albumId == albumId)
           {
             return payload
           }
           else
           {
            return element;
           }
      })]
    };
  })
);



