import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { User } from '../../models/user';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(NewContactComponent, {
      width: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.openSnackBar('Contact added', 'Navigate')
          .onAction()
          .subscribe(() => {
            // Naviage to contact
            this.router.navigate(['/contactmanager', result.id]);
          });
      }
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
