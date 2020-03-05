
import { of, Observable } from "rxjs";

export interface IExample {
  valueStream: Observable<string | number>
  isNumber: () => Observable<boolean>
}

export class Example implements IExample {

  valueStream = of(this.emitsNumber ? 42 : '42')
  isNumber = () => of(this.emitsNumber)

  constructor(private emitsNumber: boolean) { }
}
