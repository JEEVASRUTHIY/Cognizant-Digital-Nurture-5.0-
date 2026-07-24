import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditLabel', standalone: true })
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) return 'No Credits';
    return `${value} Credit${value === 1 ? '' : 's'}`;
  }
}
