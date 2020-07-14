import { NewContactComponent } from './components/new-contact/new-contact.component';
import { NotesComponent } from './components/notes/notes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';

import { ContactManagerAppComponent } from './contactmanager-app.component';
import { MainContentComponent } from './components/maincontent/maincontent.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { Routes, RouterModule } from '@angular/router';
import { User } from './models/user';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    NavTopComponent,
    ContactManagerAppComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent,
    NotesComponent,
    NewContactComponent,
  ],
  providers: [UserService],
})
export class ContactManagerModule {}
