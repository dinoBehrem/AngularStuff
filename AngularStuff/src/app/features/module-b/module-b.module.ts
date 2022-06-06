import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';
 

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ], 
  exports : [
    ComponentBComponent
  ]
})
export class ModuleBModule { }
