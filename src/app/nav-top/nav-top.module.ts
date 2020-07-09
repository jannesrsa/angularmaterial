import { MaterialModule } from '../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top.component';
import { RouterModule, Routes } from '@angular/router';

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
