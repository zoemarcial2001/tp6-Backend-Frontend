import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { LibroFormComponent } from './components/punto1/libro-form/libro-form.component';
import { PasajeFormComponent } from './components/punto3/pasaje-form/pasaje-form.component';
import { FormTransaccionComponent } from './components/punto2/form-transaccion/form-transaccion.component';

const routes: Routes = [
  {path: 'libros', component: Punto1Component},
  {path: 'transaccion', component: Punto2Component},
  {path: 'transaccion/generar', component: FormTransaccionComponent},
  {path: 'pasaje', component: Punto3Component},
  {path: 'cargarLibro', component: LibroFormComponent},
  {path: 'pasaje/:id', component: PasajeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
