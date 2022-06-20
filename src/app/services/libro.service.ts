import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  urlBase:string="http://localhost:3000/api/libro/";

  constructor(private _http:HttpClient) { }


  getLibrosDestacados():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      }),
    };
    return this._http.get(this.urlBase+"dest", httpOptions);
  }

  guardarLibro(libro:Libro):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    
    let body = JSON.stringify(libro);

    console.log(body);
    
    return this._http.post(this.urlBase, body, httpOptions);
  }
}
