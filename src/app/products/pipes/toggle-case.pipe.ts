import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, ...argrs: any[]): string {
        console.log(argrs)
        return value.toUpperCase();
    }
}