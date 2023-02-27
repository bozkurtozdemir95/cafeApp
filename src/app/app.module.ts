import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { IconComponent } from './ui/icon/icon.component';
import { ButtonComponent } from './ui/button/button.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddMenuItemComponent } from './pages/menu/add-menu-item/add-menu-item.component';
import { CheckoutComponent } from './pages/tables/checkout/checkout.component';
import { AddOrderComponent } from './pages/tables/add-order/add-order.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { ActionButtonComponent } from './ui/action-button/action-button.component';
import { SwitchComponent } from './ui/switch/switch.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { FilterSelectComponent } from './ui/filter-select/filter-select.component';
import { BadgeComponent } from './ui/badge/badge.component';
import { EmployeesComponent } from './pages/employees/employees.component';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PageTitleComponent,
    IconComponent,
    ButtonComponent,
    DashboardComponent,
    TablesComponent,
    MenuComponent,
    SettingsComponent,
    AddMenuItemComponent,
    CheckoutComponent,
    AddOrderComponent,
    ActionButtonComponent,
    SwitchComponent,
    FilterSelectComponent,
    BadgeComponent,
    EmployeesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BsDropdownModule,
        TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
