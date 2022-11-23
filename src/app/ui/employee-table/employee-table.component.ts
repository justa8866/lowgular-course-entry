import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent {
  constructor( private _employeeService: EmployeeService) { }
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.delete(id).subscribe();
  }

  onButtonClicked() {
    alert('User was successfully removed ')
  }
}

