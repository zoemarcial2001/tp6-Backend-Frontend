import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasaje!:Pasaje;
  pasajes!:Array<Pasaje>;

  constructor(private pasajeServ:PasajeService, private router:Router) { 
    this.cargarPasajes();
  }
  
  ngOnInit(): void {
  }
  
  cargarPasajes(){
    this.pasajes=new Array<Pasaje>();
    this.pasajeServ.getPasajes().subscribe((pas)=>{
      for(var i=0; i<pas.length; i++){
        var pasaje = new Pasaje()
        pasaje = pas[i];
        this.pasajes.push(pasaje);
      }
    });
  }

  eliminar(id:string){
    this.pasajeServ.eliminarPasaje(id).subscribe((pas) => {
      console.log(pas.status)
    });
  }

    modificarPasaje(pasaje: Pasaje) {
      this.router.navigate(['pasaje/', pasaje._id]);
    }
}

