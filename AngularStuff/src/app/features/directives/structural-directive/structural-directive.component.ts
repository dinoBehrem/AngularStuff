import { Component, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  // templateUrl: './structural-directive.component.html',
  template: `<main>
    <h1>Structural directives</h1>
    <section *hideAfter="5000 as time; then placeholder; let counter = counter" class="banner primary">
      <h2>Temporary contnet</h2>
      <!-- To work with structural directives * before name of directive is required -->
      <p>Working content</p>
      <p>Timer is set to {{time}} secondes. Remaining time -- {{counter}} seconds</p>
    </section>

    <!-- Rendering other content needs to be inside of an ng-template tag -->
    <ng-template #placeholder>
      <p>Placeholder content</p>
    </ng-template>
  </main>`,
  styles: []
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
