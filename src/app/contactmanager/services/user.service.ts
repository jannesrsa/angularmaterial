import { ContactManagerModule } from './../contactmanager.module';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserService {
  private dataStore: { users: User[] };
  private _users: BehaviorSubject<User[]>;
  public selectedUser: User;

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users$(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = '../../../assets/users.json';

    return this.http.get<User[]>(usersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign([], this.dataStore).users);
      },
      (error) => {
        console.log('Failed to fetch users');
      }
    );
  }

  selectUser(id: number) {
    console.log('Selected UserId: ' + id);
    this.selectedUser = this.dataStore.users.find((x) => x.id == id);
  }

  addUser(user: User): Observable<User> {
    user.id = this.dataStore.users.length + 1;
    this.dataStore.users.push(user);
    this._users.next(Object.assign([], this.dataStore).users);
    this.snackBar.open(`User added: ${user.name}`);
    return of(user);
  }
}
