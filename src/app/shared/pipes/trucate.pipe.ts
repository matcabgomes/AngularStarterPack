import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucate'
})
export class TrucatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    const limite = args.length > 0 ? parseInt(args[0], 10) : 1000;
    const sufixo = args.length > 1 ? args[1] : '';

    if(value.length > 1){
      return value.substring(0,limite) + sufixo;
    } 

    return '';
  }

}
