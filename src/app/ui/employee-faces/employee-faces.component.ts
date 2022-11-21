import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import { EmployeeService } from 'src/app/services/employee.service';
import { PersonModel } from 'src/app/model/person.model';

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  constructor( private _employeeService: EmployeeService) { }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();}
