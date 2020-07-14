import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { OnInit, Component } from '@angular/core';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.loadAll();
  }
}
