import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewContactComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  public name = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.user = new User();
  }

  getErrorMessage(): string {
    return this.name.hasError('required') ? 'You must enter a name ' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  dismiss(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.userService
      .addUser(this.user)
      .subscribe((user) => this.dialogRef.close(user));
  }
}
