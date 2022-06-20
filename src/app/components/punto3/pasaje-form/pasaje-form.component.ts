import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Pasajero } from 'src/app/models/pasajero';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {

  pasaje!:Pasaje;
  personas!:Array<Pasajero>;
  precio!:number;
  action!:boolean;
  
  constructor(private pasajeServ: PasajeService, private persServ:PersonaService, private router: Router ,private rout: ActivatedRoute) {
    this.pasaje = new Pasaje();
    this.pasaje.precioPasaje = 0;
    this.cargarPersonas();
    this.calcularTotal();
    this.asigfechaCompra();
    this.recibirDato();
  }

  ngOnInit(): void {
  }


  guardarPasaje(){
    this.pasajeServ.guardarPasaje(this.pasaje).subscribe((res) => {
      console.log(res.msg)
    });
  }

  cargarPersonas(){
    this.personas = new Array<Pasajero>();
    this.persServ.getPersonas().subscribe((per) => {
      for(var i=0; i<per.length; i++){
        var persona = new Pasajero();
        persona=per[i];
        this.personas.push(persona);
      }
    });
  }

  calcularTotal(){
    let descuento = this.pasaje.precioPasaje;
    switch (this.pasaje.categoriaPasajero) {
      case 'a':
        descuento=descuento;
        break;
      case 'j':
        descuento = (descuento * 0.5) / 1 ;
        break;
      case 'm':
        descuento = (descuento * 0.25) / 1;
        break;
    }
      return descuento
  }

  asigfechaCompra(){
    var fech= new Date();
    this.pasaje.fechaCompra = fech.getDate()+'/'+fech.getMonth()+'/'+fech.getFullYear();
    console.log(this.pasaje.fechaCompra)
  }

  recibirDato(){
      this.rout.params.subscribe((params) => {
        if (params['id']) {
          if (params['id'] === 'crear') {
            this.action = false;
          }
          else {
            this.action = true;
            this.buscarPasaje(params['id'])
          }
        }
      });
  }

  buscarPasaje(id: string){
    this.pasajeServ.getPasaje(id).subscribe((pas) => {
      this.pasaje = pas;
      console.log(this.pasaje);
    });
  }

  modificarPasaje(){
    this.pasajeServ.modificarPasaje(this.pasaje).subscribe((pas) => {
      console.log(pas.msg);
    })
  }
}
