import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JuegoComponent } from './juego/juego.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
  
  ],
  imports: [
    BrowserModule , FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [JuegoComponent]
})
export class AppModule { }
