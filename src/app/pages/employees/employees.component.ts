import { Component } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  preNavs = [
    {link: 'dashboard', text: 'menu.dashboard'},
    {link: 'employees', text: 'menu.employees'},
  ];
}
