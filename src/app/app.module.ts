import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
  NoopAnimationsModule,
  BrowserAnimationsModule,
  MdButtonModule, MdCheckboxModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
