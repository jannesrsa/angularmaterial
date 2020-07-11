import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users$: Observable<User[]>;


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    this.users$ = this.http.get<User[]>(usersUrl);
  }
}
