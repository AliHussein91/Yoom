import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-duration-switch',
  standalone: true,
  imports: [],
  templateUrl: './duration-switch.component.html',
  styleUrl: './duration-switch.component.scss',
})
export class DurationSwitchComponent {
  priceingPlan: string = 'monthly';
  @Output() duration = new EventEmitter<string>();

  choosePlan(duration: string) {
    this.priceingPlan = duration;
    this.duration.emit(duration);
  }
}
