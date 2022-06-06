import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';

import { ModuleBModule }  from '../module-b/module-b.module';

@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    CommonModule,
    ModuleBModule
  ],
  exports: [
    ComponentAComponent
  ]
})
export class ModuleAModule { }
