import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuentasService {
  public url: string;
  public opts: any[] = [];

  constructor(public _http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/';
  }

  verConceptos(): Observable<any> {
    return this._http.get(this.url + 'verConceptos', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  verCuentas(): Observable<any> {
    return this._http.get(this.url + 'verCuentas', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  concepto_cuenta(concepto_id: any): Observable<any> {
    let json = JSON.stringify(concepto_id);
    let params = 'json=' + json;

    return this._http.post(this.url + 'concepto_cuenta', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  detalleConceptos(miJson: any): Observable<any> {
    let json = JSON.stringify(miJson);
    let params = 'json=' + json;

    return this._http.post(this.url + 'detalleConceptos', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  verTablaCuentas(miJson: any): Observable<any> {
    let json = JSON.stringify(miJson);
    let params = 'json=' + json;

    return this._http.post(this.url + 'verTablaCuentas', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
