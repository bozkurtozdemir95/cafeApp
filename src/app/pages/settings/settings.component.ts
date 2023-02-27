import { Component } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  preNavs = [
    {link: 'dashboard', text: 'menu.dashboard'},
    {link: 'settings', text: 'menu.settings'},
  ];
}
