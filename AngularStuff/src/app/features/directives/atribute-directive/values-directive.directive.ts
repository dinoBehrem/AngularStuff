import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appValuesDirective]'
})
export class ValuesDirectiveDirective {
  changeTextColor(color : string) {
    this.element.nativeElement.style.color = color;
  }

  @Input() appValuesDirective = '';
  @Input() defaultColor = '';

  // To dynamically apply changes an event is necesarry
  constructor(private element : ElementRef) {
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.changeTextColor(this.appValuesDirective || this.defaultColor);
  }
}
