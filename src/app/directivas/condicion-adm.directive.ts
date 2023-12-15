import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCondicionAdm]'
})
export class CondicionAdmDirective {

  constructor(private element: ElementRef) {
    
   }

}
