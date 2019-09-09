import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { SpongebobPipe } from './spongebob.pipe';
import { MarkDirective } from './mark.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SpongebobPipe,
    MarkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
