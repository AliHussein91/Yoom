import { HtmlParser } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit-item',
  standalone: true,
  imports: [],
  templateUrl: './benefit-item.component.html',
  styleUrl: './benefit-item.component.scss'
})
export class BenefitItemComponent {
  @Input() icon!: string
  @Input() title!: string
  @Input() details!: string

}
