import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../shared/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../../shared/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TogglerComponent } from '../../shared/toggler/toggler.component';
import { EmailInputComponent } from '../../shared/email-input/email-input.component';
import { PassInputComponent } from '../../shared/pass-input/pass-input.component';
import { PhoneInputComponent } from '../../shared/phone-input/phone-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    TogglerComponent,
    EmailInputComponent,
    PassInputComponent,
    PhoneInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  methodToggle: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
  });

  toggleMethod(): void {
    this.methodToggle = !this.methodToggle;
  }

  loginFormSubmit(): void {
    console.log(this.loginForm.value);
  }
}
