import { MaterialModule } from '../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [NavTopComponent],
  exports: [
    // Providers, Components, directive, pipes
    NavTopComponent
  ],
})
export class NavTopModule { }
