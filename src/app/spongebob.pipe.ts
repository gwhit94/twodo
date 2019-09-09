import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
// Pipe that adds spongebob case
// first char lowercase, next uppercase, ignoring spaces