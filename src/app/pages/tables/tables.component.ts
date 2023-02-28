import {Component} from '@angular/core';
import tables from '../../constants/tables';
import {UiService} from "../../ui/ui.service";

@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  preNavs = [
    {link: 'dashboard', text: 'menu.dashboard'},
    {link: 'tables', text: 'menu.tables'},
  ];

  tables: any = [];

  constructor(public ui: UiService) {
    this.tables = tables;
  }

}
