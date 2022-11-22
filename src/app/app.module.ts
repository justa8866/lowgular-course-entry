import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeeFacesComponentModule} from "./ui/employee-faces/employee-faces.component-module";
import { EmployeeServiceModule } from './services/employee.service-module';
import {ProjectListComponentModule} from "./ui/project-list/project-list.component-module";
import { ProjectServiceModule } from './services/project.service-module';
import { EmployeeFormComponentModule } from "./ui/employee-form/employee-form.component-module";
import { UserFormComponentModule } from "./ui/user-form/user-form.component-module";



@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EmployeeListComponentModule,
        EmployeeFacesComponentModule,
        EmployeeServiceModule,
        ProjectListComponentModule,
        ProjectServiceModule,
        EmployeeFormComponentModule,
        UserFormComponentModule
    ]
})
export class AppModule {}
