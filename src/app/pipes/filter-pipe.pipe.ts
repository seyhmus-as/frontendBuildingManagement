import { Pipe, PipeTransform } from '@angular/core';
import { Apartment } from '../models/apartment';

@Pipe({
     name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

     transform(value: Apartment[], filterText: string): Apartment[] {
          filterText = filterText?filterText.toLocaleLowerCase(): ""
          return filterText?
          value.filter((p:Apartment)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1)
          :value;
     }

}