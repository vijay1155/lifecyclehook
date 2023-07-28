import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { HighlightDirective } from './highlight.directive';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    ExampleComponentComponent,
    HighlightDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
