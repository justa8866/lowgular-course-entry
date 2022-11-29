import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import {EmployeeTableComponentModule} from "./ui/employee-table/employee-table.component-module";
import {EmployeeTableComponent} from "./ui/employee-table/employee-table.component";
import {HomeComponent} from "./ui/home/home.component";
import {HomeComponentModule} from "./ui/home/home.component-module";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employee-list', component: EmployeeTableComponent},
  { path: 'create-employee', component: EmployeeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeFormComponentModule, EmployeeServiceModule, EmployeeTableComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
