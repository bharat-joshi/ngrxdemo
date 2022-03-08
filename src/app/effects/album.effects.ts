import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlbumService } from '../services/albums.service';
import * as fromAction from '../action/gallary.action';
import { catchError, exhaustMap, map, Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumEffect {
  constructor(private actions$: Actions, private albumService: AlbumService) {}

  albums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.GET_ALBUM),
      exhaustMap(() =>
        this.albumService
          .getAllAlbum()
          .pipe(map((data) => fromAction.GET_ALBUM_SUCCESS({ payload: data })))
      )
    )
  );
}
