import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LegalComponent } from "../legal/legal.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, LegalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() onlyLegal: boolean = true;
}
