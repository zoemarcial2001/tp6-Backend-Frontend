import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase:string="http://localhost:3000/api/pasaje/";

  constructor(private _http:HttpClient) { }

  getPasajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
    
      }),
      params: new HttpParams({

      })
    };
    
    return this._http.get(this.urlBase, httpOptions);
  }
  guardarPasaje(pasaje: Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    
    let body = JSON.stringify(pasaje);
    console.log(body);

    return this._http.post(this.urlBase, body, httpOptions);
  }

  eliminarPasaje(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
  
    return this._http.delete(this.urlBase+id, httpOptions);
  }

  getPasaje(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
  
    return this._http.get(this.urlBase+id, httpOptions);
  }

  modificarPasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    };
    let body = JSON.stringify(pasaje);

    return this._http.put(this.urlBase+pasaje._id, body, httpOptions);
  }
}

