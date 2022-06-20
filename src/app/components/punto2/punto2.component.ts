import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  transacciones!: Array<Transaccion>;
  transaccion!: Transaccion;
  divisas!: Array<string>;

  origen!: string;
  destino!: string;

  constructor(private transaccionServ: TransaccionService) {
    this.transaccion = new Transaccion();
    this.transaccion.cantidadDestino = 0;
    this.transacciones = new Array<Transaccion>();
    this.obtenerTransacciones();
    this.divisas = ['USD', 'AUD', 'GBP', 'JPY', 'EUR', 'AUD', 'BTC', 'ARS'];
    this.origen = '';
    this.destino = '';
  }

  ngOnInit(): void {}

  limpiar() {
    this.obtenerTransacciones();
    this.origen = '';
    this.destino = '';
  }

  filtrarTransacciones() {
    this.transaccionServ.filtrarDivisas(this.origen, this.destino).subscribe((res) => {
        this.transacciones = res;
      });
  }

  obtenerTransacciones() {
    this.transaccionServ.getTransacciones().subscribe((tr) => {
      this.transacciones = tr;
      console.log(this.transacciones);
    })
  }

  guardarTransaccion(){
    this.transaccion.tasaConversion = 1;
    this.transaccionServ.getCurrecy(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe((m) => {
      this.transaccion.cantidadDestino = m.new_amount;
      this.transaccionServ.guardarTransaccion(this.transaccion).subscribe((t) =>{
        console.log(t.msg);
      })
    })
  }

}
