import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuleAModule } from './features/multiple_modules/module-a/module-a.module';
import { StructuralDirectiveComponent } from './features/directives/structural-directive/structural-directive.component';
import { HideAfterDirective } from './features/directives/hide-after.directive';
import { AtributeDirectiveComponent } from './features/directives/atribute-directive/atribute-directive.component';
import { SimpleDirectiveDirective } from './features/directives/atribute-directive/simple-directive.directive';
import { EventDirectiveDirective } from './features/directives/atribute-directive/event-directive.directive';
import { ValuesDirectiveDirective } from './features/directives/atribute-directive/values-directive.directive';
import { PipeComponent } from './features/pipes/pipe/pipe.component';
import { CustomPipePipe } from './features/pipes/custom-pipe.pipe';
import { ReactiveFormsComponent } from './features/forms/reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveComponent,
    HideAfterDirective,
    AtributeDirectiveComponent,
    SimpleDirectiveDirective,
    EventDirectiveDirective,
    ValuesDirectiveDirective,
    PipeComponent,
    CustomPipePipe,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
