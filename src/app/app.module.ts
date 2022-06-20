import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { HeaderComponent } from './components/header/header.component';
import { LibroFormComponent } from './components/punto1/libro-form/libro-form.component';
import { PasajeFormComponent } from './components/punto3/pasaje-form/pasaje-form.component';
import { FormTransaccionComponent } from './components/punto2/form-transaccion/form-transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    HeaderComponent,
    LibroFormComponent,
    PasajeFormComponent,
    FormTransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
