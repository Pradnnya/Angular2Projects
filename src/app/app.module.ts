import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { GreetComponent } from './greet/greet.component';
import { ProductsComponentComponent } from './products-component/products-component.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    GreetComponent,
    ProductsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
