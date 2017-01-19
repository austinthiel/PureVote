import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {  ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent }   from './app.component';


/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
      HttpModule,
  		AppRoutingModule,
  		BrowserModule,
  		ReactiveFormsModule,
  ],
  declarations: [ 
  	AppComponent, 
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }