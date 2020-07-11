import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager-app.component.html',
  styleUrls: ['./contactmanager-app.component.scss'],
})
export class ContactManagerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() { }
}
