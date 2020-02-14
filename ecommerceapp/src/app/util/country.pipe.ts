import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryPipe implements PipeTransform {
  transform(value: any, search: string): any {
    return value.filter(x => x.name.includes(search));
  }

}
