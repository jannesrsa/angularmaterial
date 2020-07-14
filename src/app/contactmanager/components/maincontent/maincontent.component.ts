import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit() {
    console.log('Routed to ID');

    this.activedRoute.params.subscribe((params) => {
      this.userService.users$.subscribe((users) => {
        if (users.length == 0) return;
        this.userService.selectUser(+params['id']);
      });
    });
  }
}
