import {createAction,props} from '@ngrx/store'


export const GET_ALBUM = createAction('[App controller] Get Album');
export const GET_ALBUM_SUCCESS = createAction('[App controller] Get Album success',props<{payload:any}>());
export const ADD_ALBUM = createAction('[App controller] Add Album',props<{payload:any}>());
export const UPDATE_ALBUM = createAction('[App controller] Update Album',props<{albumId:number,payload:any}>());
export const DELETE_ALBUM = createAction('[App controller] dELETE Album',props<{albumId:number}>());
