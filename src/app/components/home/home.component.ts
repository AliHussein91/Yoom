import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { BenefitsComponent } from "./benefits/benefits.component";
import { InstructionsComponent } from "./instructions/instructions.component";
import { PricingComponent } from "./pricing/pricing.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, BenefitsComponent, InstructionsComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
