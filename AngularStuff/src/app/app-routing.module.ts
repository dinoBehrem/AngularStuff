import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectiveComponent } from './features/directives/structural-directive/structural-directive.component';
import { ComponentAComponent } from './features/multiple_modules/module-a/component-a/component-a.component';
import { AtributeDirectiveComponent } from './features/directives/atribute-directive/atribute-directive.component';

const routes: Routes = [
  { path: 'StructuralDirective', component: StructuralDirectiveComponent},
  { path: 'MultipleModules', component: ComponentAComponent},
  { path: 'AtributeDirective', component: AtributeDirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
