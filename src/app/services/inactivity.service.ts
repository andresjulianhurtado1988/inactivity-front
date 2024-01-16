import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/';
  }

  createInactivity(): Observable<any> {
    let params = 0;

    return this._http.post(this.url + 'createInactivity', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  createActivity(): Observable<any> {
    let params = 1;

    return this._http.post(this.url + 'createActivity', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  verTiendas(): Observable<any> {
    return this._http.get(this.url + 'verTiendas', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  verEmpleados(joye: any): Observable<any> {
    let json = JSON.stringify(joye);
    let params = 'json=' + json;

    return this._http.post(this.url + 'verEmpleados', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  verTabla(miJson: any): Observable<any> {
    let json = JSON.stringify(miJson);
    let params = 'json=' + json;

    return this._http.post(this.url + 'verTabla', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  crearExcel(miJson: any): Observable<Blob> {
    let json = JSON.stringify(miJson);
    let params = 'json=' + json;

    return this._http.post(this.url + 'createExcel', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
      responseType: 'blob',
    });
  }
}
