import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumModel } from './models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'demo2';
  albumsList$: Observable<{ albums: AlbumModel[] }>= new Observable();
  constructor(private store: Store<{ gallaryList: { albums: AlbumModel } }>) {

  }
  ngOnInit(): void {
    this.albumsList$ = this.store.select('gallaryList');
  }
}
