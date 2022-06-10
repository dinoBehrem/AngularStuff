import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuleAModule } from './features/multiple_modules/module-a/module-a.module';
import { StructuralDirectiveComponent } from './features/directives/structural-directive/structural-directive.component';
import { HideAfterDirective } from './features/directives/hide-after.directive';
import { AtributeDirectiveComponent } from './features/directives/atribute-directive/atribute-directive.component';
import { SimpleDirectiveDirective } from './features/directives/atribute-directive/simple-directive.directive';
import { EventDirectiveDirective } from './features/directives/atribute-directive/event-directive.directive';
import { ValuesDirectiveDirective } from './features/directives/atribute-directive/values-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveComponent,
    HideAfterDirective,
    AtributeDirectiveComponent,
    SimpleDirectiveDirective,
    EventDirectiveDirective,
    ValuesDirectiveDirective
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
