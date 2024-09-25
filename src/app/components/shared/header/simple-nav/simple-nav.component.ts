import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'app-simple-nav',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './simple-nav.component.html',
  styleUrl: './simple-nav.component.scss',
})
export class SimpleNavComponent {
}
