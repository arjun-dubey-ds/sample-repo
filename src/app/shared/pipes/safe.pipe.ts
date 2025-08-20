import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  transform(value: any, fallback: string = '-'): string {
    if (value === null || value === undefined || value === '') {
      return fallback;
    }
    return value.toString();
  }
}
