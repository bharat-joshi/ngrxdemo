import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlbumModel } from './models/album.model';
import * as fromStore from './reducers/gallary.reducer';
import * as fromAction from './action/gallary.action';
import { getMessage, selectGallarylist } from './selectors/gallary.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo2';
  albumList$: Observable<AlbumModel[]>;
  isLoading$: Observable<boolean>;
  albumForm: FormGroup;
  isSubmitted = false;
  isEdit = false;
  constructor(private store: Store<fromStore.State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.albumList$ = this.store.select(selectGallarylist);
    this.isLoading$ = this.store.select(getMessage)
    this.setupForm();
    this.store.dispatch(fromAction.GET_ALBUM());
  }

  setupForm() {
    this.albumForm = this.fb.group({
      albumId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required],
    });
  }

  OnSubmit() {
    this.isSubmitted = true;
    if (this.albumForm.invalid) {
      return;
    }

    this.store.dispatch(
      fromAction.ADD_ALBUM({ payload: this.albumForm.value })
    );
  }

  resetForm() {
    this.albumForm.reset();
    this.isEdit = false;
  }

  edit(item: any) {
    this.albumForm.patchValue(item);
    this.isEdit = true;
  }

  deleteItem(item: any) {
    this.store.dispatch(fromAction.DELETE_ALBUM({ albumId: item.albumId }));
  }

  identify(index: any, item: any) {
    return item;
  }
  updateItem() {
    this.store.dispatch(
      fromAction.UPDATE_ALBUM({
        albumId: this.albumForm.value.albumId,
        payload: this.albumForm.value,
      })
    );
  }
}
