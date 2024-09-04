import { Component } from '@angular/core';
import { DurationSwitchComponent } from "./duration-switch/duration-switch.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [DurationSwitchComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}
