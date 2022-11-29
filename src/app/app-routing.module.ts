import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeTableComponent } from './ui/employee-table/employee-table.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeTableComponentModule } from './ui/employee-table/employee-table.component-module';
import { HomeComponentModule } from './ui/home/home.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee-list', component: EmployeeTableComponent },
  { path: 'create-employee', component: EmployeeFormComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeFormComponentModule, EmployeeServiceModule, EmployeeTableComponentModule, HomeComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
