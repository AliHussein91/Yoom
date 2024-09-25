import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigit',
  standalone: true,
})
export class TwoDigitPipe implements PipeTransform {
  transform(value: number): string {
    let result: string = '';
    if (value <= 9) {
      return result = `0${value}`
    }

    return value.toString();
  }
}
