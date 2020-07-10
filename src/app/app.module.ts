import { NavTopModule } from './nav-top/nav-top.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
   {
      path: 'demo', loadChildren: () =>
         import("./demo/demo.module").then(
            (mod) => mod.DemoModule
         ),
   },
   { path: '**', redirectTo: 'demo' }
];

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      NavTopModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }