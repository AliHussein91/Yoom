import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [DropdownMenuComponent,FormsModule],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneInputComponent,
      multi: true,
    },
  ],
})
export class PhoneInputComponent implements ControlValueAccessor {
  countryKey!: string;
  phone!: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(input: any): void {
    this.phone = input;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setCountryKey(dialCode: string): void {
    this.countryKey = dialCode;
  }
}
