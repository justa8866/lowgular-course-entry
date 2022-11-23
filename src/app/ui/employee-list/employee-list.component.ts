import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/model/person.model';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor( private _employeeService: EmployeeService) { }
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
  
  remove(id: string) {
    this._employeeService.delete(id).subscribe();
  }

  onButtonClicked() {
    alert('User was successfully removed ')
  }
}
