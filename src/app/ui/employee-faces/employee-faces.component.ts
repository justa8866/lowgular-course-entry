import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  constructor( private _employeeService: EmployeeService) { }
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();}
