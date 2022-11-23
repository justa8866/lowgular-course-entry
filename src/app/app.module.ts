import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EmployeeServiceModule} from "./services/employee.service-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {EmployeeTableComponentModule} from "./ui/employee-table/employee-table.component-module";



@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    EmployeeTableComponentModule

  ]
})
export class AppModule {}
