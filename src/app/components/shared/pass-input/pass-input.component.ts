import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-pass-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pass-input.component.html',
  styleUrl: './pass-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PassInputComponent,
      multi: true,
    },
  ],
})
export class PassInputComponent implements ControlValueAccessor {
  isPasswordVisible: boolean = false;
  inputType: string = 'password';
  password!: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(input: string): void {
    this.password = input;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeVisibility(v: string) {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.inputType = v;
  }
}
