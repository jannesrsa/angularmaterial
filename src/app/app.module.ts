import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'demo', loadChildren: () =>
      import('./demo/demo.module').then(
        (mod) => mod.DemoModule
      ),
  },
  {
    path: 'contactmanager', loadChildren: () =>
      import('./contactmanager/contactmanager.module').then(
        (mod) => mod.ContactManagerModule
      ),
  },
  { path: '**', redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
