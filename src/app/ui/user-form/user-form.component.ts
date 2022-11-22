import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    name: new FormControl()
  })

  onButtonClicked(form: {email: string, password: string, name: string}) {
    alert('User was successfully added to the database ' + form.email)
  }
}
