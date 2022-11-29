import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  constructor(private _activatedRoute: ActivatedRoute) {
  }

  readonly params$: Observable<{ id: any }> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id']}))
  )
}
