import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute-directive',
  template: `<main>
    <h1>Atribute directives</h1>
    <section>
      <p appSimpleDirective>Simple directive that changes text color</p>
      <p appEventDirective>User event handling directive</p>
      <p [appValuesDirective]="color" defaultColor='violet'>Passing values to directive</p>
      <button (click)="setColor('grey')">Change color</button>
      </section>
  </main>`,
  styles: []
})
export class AtributeDirectiveComponent implements OnInit {

  color = 'orange';
  constructor() { }

  ngOnInit(): void {
  }

  setColor(color: string){
    this.color = color;
  }
}
