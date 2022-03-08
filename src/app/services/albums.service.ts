import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlbumModel } from '../models/album.model';
@Injectable({providedIn: 'root'})
export class AlbumService {
  constructor(private http:HttpClient) { }

  getAllAlbum()
  {
    return this.http.get<AlbumModel[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
