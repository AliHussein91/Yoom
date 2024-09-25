import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CodeInputComponent, CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-conf-code',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule,CodeInputModule],
  templateUrl: './conf-code.component.html',
  styleUrl: './conf-code.component.scss',
})
export class ConfCodeComponent {
  codeForm = new FormGroup({
    code: new FormControl(),
  });


}
