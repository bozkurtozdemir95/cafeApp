import {Component} from '@angular/core';

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

  tables = [
    {id: 1, name: 'Masa 1', empty: false},
    {id: 2, name: 'Masa 2', empty: true},
    {id: 3, name: 'Masa 3', empty: false},
    {id: 4, name: 'Masa 4', empty: true},
    {id: 5, name: 'Masa 5', empty: true},
    {id: 6, name: 'Masa 6', empty: false},
    {id: 7, name: 'Masa 7', empty: false},
    {id: 8, name: 'Masa 8', empty: true},
    {id: 9, name: 'Masa 9', empty: true},
    {id: 10, name: 'Masa 10', empty: false},
    {id: 11, name: 'Masa 11', empty: true},
    {id: 12, name: 'Masa 12', empty: true},
  ];
}
