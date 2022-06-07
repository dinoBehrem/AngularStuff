import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuleAModule } from './features/multiple_modules/module-a/module-a.module';
import { StructuralDirectiveComponent } from './features/directives/structural-directive/structural-directive.component';
import { HideAfterDirective } from './features/directives/hide-after.directive';
@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveComponent,
    HideAfterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
