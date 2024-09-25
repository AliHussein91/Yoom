import { Component } from '@angular/core';
import { BenefitItemComponent } from "./benefit-item/benefit-item.component";
import { Benefit } from '../../../interfaces/benefit';
import { BenefitsService } from '../../../services/benefits.service';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [BenefitItemComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  benefitsList: Benefit[] = []

  constructor(private benefit: BenefitsService) {
    this.benefitsList = benefit.benefitsList
  }
}
