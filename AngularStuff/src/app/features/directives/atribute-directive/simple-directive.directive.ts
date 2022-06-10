import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimpleDirective]'
})
export class SimpleDirectiveDirective {
  // Simple atribute directive
  
  // In the constructor we pass ElementRef parametar to define which html tag we are targeting 
  constructor(private element: ElementRef) {
    this.changeRextColor('green');
   }

  private changeRextColor(color : string) {
    this.element.nativeElement.style.color = color;
  }
}
