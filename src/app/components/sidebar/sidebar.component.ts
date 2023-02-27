import {Component} from '@angular/core';
import menuItems from '../../constants/menu';
import {UiService} from "../../ui/ui.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: any = menuItems;

  constructor(public ui: UiService) {
  }
}
