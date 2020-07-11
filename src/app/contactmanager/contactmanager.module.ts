import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';

import { ContactManagerComponent } from './contactmanager-app.component';
import { MainContentComponent } from './components/maincontent/maincontent.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ContactManagerComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NavTopComponent,
    ContactManagerComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent]
})
export class ContactManagerModule { }
