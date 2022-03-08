import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromReducer from './reducers/gallary.reducer'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import * as fromEffect from './effects/album.effects'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({gallaryList : fromReducer.AlbumReducer}),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([fromEffect.AlbumEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
