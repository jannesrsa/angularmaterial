import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularmaterial';

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

}
