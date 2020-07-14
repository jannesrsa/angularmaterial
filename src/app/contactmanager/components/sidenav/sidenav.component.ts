import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { OnInit, Component } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.loadAll();

    this.userService.users$.subscribe((data) => {
      if (data.length > 0)
        this.router.navigate(['/contactmanager', data[0].id]);
    });
  }
}
