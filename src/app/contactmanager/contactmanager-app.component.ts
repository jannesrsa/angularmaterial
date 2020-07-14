import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager-app.component.html',
  styleUrls: ['./contactmanager-app.component.scss'],
})
export class ContactManagerAppComponent implements OnInit {
  constructor(
    private iconRegistery: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistery.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/avatars.svg')
    );
  }

  ngOnInit() {}
}
