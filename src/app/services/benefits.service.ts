import { Injectable } from '@angular/core';
import { Benefit } from '../interfaces/benefit';

@Injectable({
  providedIn: 'root',
})
export class BenefitsService {
  benefitsList: Benefit[] = [
    {
      id: 1,
      icon: '../../../assets/img/benefit-1.svg',
      title: 'Reduced Development Time',
      details:
        'Save time and resources by integrating Yoom seamlessly into your projects.',
    },
    {
      id: 2,
      icon: `../../../assets/img/benefit-2.svg`,
      title: 'Improved User Experience',
      details:
        'Provide a seamless and intuitive user experience for hosting and participating in video calls.',
    },
    {
      id: 3,
      icon: `../../../assets/img/benefit-3.svg`,
      title: 'Increased Productivity',
      details:
        'Enhance remote collaboration and communication to boost your business productivity."',
    },
    {
      id: 4,
      icon: `../../../assets/img/benefit-4.svg`,
      title: 'Cost Savings',
      details: 'Affordable pricing plans designed to save your business money.',
    },
    {
      id: 5,
      icon: `../../../assets/img/benefit-5.svg`,
      title: 'Language Flexibility',
      details: 'Change the interface language to suit your needs.',
    },
    {
      id: 6,
      icon: `../../../assets/img/benefit-6.svg`,
      title: 'Customizable Subscription',
      details:
        'Choose the number of participants or hours required—available for monthly or yearly bookings.',
    },
  ];
}
