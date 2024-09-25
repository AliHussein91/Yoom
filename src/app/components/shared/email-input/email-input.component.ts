import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmailInputComponent,
      multi: true,
    },
  ],
})
export class EmailInputComponent implements ControlValueAccessor {
  email!: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(input: any): void {
    this.email = input;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
