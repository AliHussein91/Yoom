import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { ButtonComponent } from "../../button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LogoComponent, ButtonComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
