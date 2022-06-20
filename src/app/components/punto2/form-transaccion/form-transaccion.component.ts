import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-form-transaccion',
  templateUrl: './form-transaccion.component.html',
  styleUrls: ['./form-transaccion.component.css']
})
export class FormTransaccionComponent implements OnInit {

  transaccion!: Transaccion;
  divisas!: Array<any>;

  cantOrigen!: number;
  cantDestino!: number;
  divOrigen!: string;
  divDestino!: string;
  tasa!: number;
  email!: string;

  convertir!: boolean;

  constructor(private transaccionServ: TransaccionService) {
    this.cantOrigen = 0;
    this.cantDestino = 0;
    this.divOrigen = '';
    this.divDestino = '';
    this.tasa = 0;
    this.email = '';
    this.convertir = false;
    this.divisas = ['USD', 'AUD', 'GBP', 'JPY', 'EUR', 'AUD', 'BTC', 'ARS'];
  }
  ngOnInit(): void {
  }
  
  generar() {
    this.convertir = true;
    if (this.cantOrigen != 0 &&  this.tasa != 0 &&  this.divOrigen != '' &&  this.divDestino != '' &&  this.email != '') {
      this.divOrigen = this.divOrigen.toUpperCase()
      this.divDestino = this.divDestino.toUpperCase();
      var total: number;
      var email: number = 0;
      this.transaccionServ.getTransacciones().subscribe((res) => {
        total = res.length;
        res.forEach((transaccion: Transaccion) => {
          email++;
        });
        this.tasa = email / total;
      })
      this.transaccionServ.getCurrecy(this.divOrigen, this.divDestino, this.cantOrigen).subscribe((res) => {
        this.cantDestino = res.new_amount;
        this.transaccion = new Transaccion();
        this.transaccionServ.guardarTransaccion(this.transaccion).subscribe((res) => {
          console.log(res);
        });
      });
    } else {
      console.log("Error de validacion")
    }
  }

}
