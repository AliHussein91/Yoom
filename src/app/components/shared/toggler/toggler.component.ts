import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggler.component.html',
  styleUrl: './toggler.component.scss',
})
export class TogglerComponent {
  methodeToggle: boolean = false;
  @Input({ required: true }) optionA!: string;
  @Input({ required: true }) optionB!: string;
  @Output() switchAction = new EventEmitter();

  onSwitch(action: Event) {
    this.switchAction.emit(action);
  }
}
