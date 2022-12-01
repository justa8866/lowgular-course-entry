import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }

  readonly params$: Observable<{ id: any }> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id'] }))
  )

  readonly  details$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
    switchMap(data =>  this._employeeService.getOne(data['id'])))
}
