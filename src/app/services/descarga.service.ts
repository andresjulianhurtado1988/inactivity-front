import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DescargaService {
  private urlServicio: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  servicioAgregar(contenidoArchivo: any, ruta: string): Observable<any> {
    return this._http.post(this.urlServicio + ruta, { contenidoArchivo });
  }
}
