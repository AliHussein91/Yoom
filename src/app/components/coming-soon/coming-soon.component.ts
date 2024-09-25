import { Component, signal, Signal } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { SimpleNavComponent } from '../shared/header/simple-nav/simple-nav.component';
import { LegalComponent } from '../shared/legal/legal.component';
import { TwoDigitPipe } from '../../pipes/two-digit-pipe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [LogoComponent, SimpleNavComponent, LegalComponent, TwoDigitPipe],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {
  launchDate: Date = new Date(2024, 12, 12);
  today: Date = new Date();

  remainingDays = signal<number>(0);
  remainingHours = signal<number>(0);
  remainingMinutes = signal<number>(0);
  remainingSeconds = signal<number>(0);

  timeTillLaucn(today: number, launch: number) {
    // get total seconds between the times
    let delta = Math.abs(launch - today) / 1000;

    // calculate (and subtract) whole days
    this.remainingDays.update(() => Math.floor(delta / 86400));
    delta -= this.remainingDays() * 86400;

    // calculate (and subtract) whole hours
    this.remainingHours.update(() => Math.floor(delta / 3600) % 24);
    delta -= this.remainingHours() * 3600;

    // calculate (and subtract) whole minutes
    this.remainingMinutes.update(() => Math.floor(delta / 60) % 60);
    delta -= this.remainingMinutes() * 60;

    // what's left is seconds
    this.remainingSeconds.update(() => Math.floor(delta % 60)); // in theory the modulus is not required
  }

  constructor() {
    setInterval(() => {
      this.timeTillLaucn(new Date().getTime(), this.launchDate.getTime());
      console.log(this.remainingSeconds());
    }, 1000);
  }
}
