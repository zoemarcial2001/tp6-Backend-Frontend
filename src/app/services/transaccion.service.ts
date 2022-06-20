import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  baseUrl = 'http://localhost:3000/api/transaccion/';
  constructor(private http: HttpClient) {}

  public getTransacciones(): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      }),
    };
    return this.http.get(this.baseUrl, httpOptions);
  }
  public guardarTransaccion(transaccion: Transaccion) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({

      })
    };

    let body = JSON.stringify(transaccion);

    return this.http.post(this.baseUrl, body, httpOptions);
  }
  
  public filtrarDivisas(origen: string, destino: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      }).set('origen', origen).set('destino', destino),
    };
    return this.http.get(this.baseUrl +'filtro', httpOptions);
  }

  public getCurrecy(have: string, want: string, amount: number):Observable<any>{
    const httpOptions = {
      mmrthod:"GET",
      params: {
        "have": have,
        "want": want,
        "amount": amount
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429',
      }),
    };
    return this.http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',httpOptions);
  }

}
