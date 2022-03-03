import { Action } from "@ngrx/store";
import { AlbumModel } from "src/app/models/album.model";

export const ADD_ALBUM = 'ADD_ALBUM';

export class AddAlbum implements Action{
  readonly type = ADD_ALBUM;
  payload?: AlbumModel;

}
