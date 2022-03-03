import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gallaryListReducer } from './store/reducers/gallary-list.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore({gallaryList : gallaryListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
