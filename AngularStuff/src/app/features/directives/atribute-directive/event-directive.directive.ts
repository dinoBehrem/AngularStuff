import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventDirective]'
})
export class EventDirectiveDirective {

  constructor(private element : ElementRef) { }

  // Listens for a sprecific event to trigger directive
  @HostListener('click') onClick(){
    this.changeTextColor('yellow');
  }

  private changeTextColor(color : string){
    this.element.nativeElement.style.color = color;
  }
}
