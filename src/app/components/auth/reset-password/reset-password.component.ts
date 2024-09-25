import { Component } from '@angular/core';
import { TogglerComponent } from '../../shared/toggler/toggler.component';
import { EmailInputComponent } from '../../shared/email-input/email-input.component';
import { PhoneInputComponent } from '../../shared/phone-input/phone-input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    TogglerComponent,
    EmailInputComponent,
    PhoneInputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  methodToggle: boolean = false;

  resetPassForm = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
  });

  toggleMethod(): void {
    this.methodToggle = !this.methodToggle;
  }

  passResetFormSubmit() {
    console.log(this.resetPassForm.value);
  }
}
