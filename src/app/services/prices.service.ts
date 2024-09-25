import { Injectable } from '@angular/core';
import { PricePlans } from '../interfaces/price-plans';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  priceList: PricePlans[] = [
    {
      hourly: [
        {
          id: 1,
          plan: 'Basic',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 2,
          plan: 'Pro',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 3,
          plan: 'Enterprise',
          info: '',
          price: 500,
          features: [''],
        },
      ],
    },
    {
      daily: [
        {
          id: 1,
          plan: 'Basic',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 2,
          plan: 'Pro',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 3,
          plan: 'Enterprise',
          info: '',
          price: 500,
          features: [''],
        },
      ],
    },
    {
      monthly: [
        {
          id: 1,
          plan: 'Basic',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 2,
          plan: 'Pro',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 3,
          plan: 'Enterprise',
          info: '',
          price: 500,
          features: [''],
        },
      ],
    },
    {
      yearly: [
        {
          id: 1,
          plan: 'Basic',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 2,
          plan: 'Pro',
          info: '',
          price: 500,
          features: [''],
        },
        {
          id: 3,
          plan: 'Enterprise',
          info: '',
          price: 500,
          features: [''],
        },
      ],
    },
  ];
}
