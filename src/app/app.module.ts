import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MATERIAL_DOCS_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(MATERIAL_DOCS_ROUTES, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'corrected'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }