import { Component, Input } from '@angular/core';
import { SimpleNavComponent } from './simple-nav/simple-nav.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SimpleNavComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() simple: boolean = true;
}
