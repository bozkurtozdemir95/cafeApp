import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  badges = [
    {icon: 'iconsminds-clock-back', text: 'pending_orders', value: 3},
    {icon: 'iconsminds-calendar-1', text: 'orders_today', value: 413},
    {icon: 'iconsminds-network', text: 'tables_full', value: 5},
    {icon: 'iconsminds-money-bag', text: 'profit_today', value: 5680},
  ];

}
