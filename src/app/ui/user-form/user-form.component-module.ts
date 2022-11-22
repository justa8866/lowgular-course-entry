import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
  declarations: [UserFormComponent],
  providers: [],
  exports: [UserFormComponent]
})
export class UserFormComponentModule {
}
