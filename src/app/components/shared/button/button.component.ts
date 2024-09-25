import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) buttonText!: string;
  @Input() backgroundColor!: string;
  @Input() textColor!: string;
  @Input() type!: string;
  @Input() hamada!: string


  @Output() buttonAction = new EventEmitter();

  onClick(action: Event) {
    this.buttonAction.emit(action);
  }
}
