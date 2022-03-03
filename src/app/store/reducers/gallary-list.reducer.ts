import { Action } from '@ngrx/store';
import { AlbumModel } from '../../models/album.model';
import * as fromAction from '../actions/gallary-list.action'
let albumsArray: AlbumModel[] = [];
albumsArray.push({
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
});

const initialState = {
  albums: albumsArray,
};

export function gallaryListReducer(state = initialState, action: fromAction.AddAlbum) {
  switch (action.type) {
    case fromAction.ADD_ALBUM
    return {
      ...state,
      albums:[...state.albums,action.payload]
    }
  }
}
