import {createAction,props} from '@ngrx/store'


export const GET_ALBUM = createAction('[App controller] Get Album');
export const ADD_ALBUM = createAction('[App controller] Add Album',props<{payload:any}>());

