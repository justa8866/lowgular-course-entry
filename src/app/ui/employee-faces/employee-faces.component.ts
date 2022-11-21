import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFacesComponent {
  constructor(private _client: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
}
