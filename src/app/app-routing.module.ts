import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {TablesComponent} from "./pages/tables/tables.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {EmployeesComponent} from "./pages/employees/employees.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
