import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo', loadChildren: () =>
      import("../demo/demo.module").then(
        (mod) => mod.DemoModule
      ),
  },
  { path: '**', redirectTo: 'contactmanager' }
];


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [NavTopComponent],
  exports: [
    // Providers, Components, directive, pipes
    NavTopComponent
  ],
})
export class NavTopModule { }
