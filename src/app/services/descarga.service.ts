import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DescargaService {
  private urlServicio = 'http://localhost:3000/crear-archivo';

  constructor(private _http: HttpClient) {}

  crearArchivo(contenidoArchivo: string): Observable<any> {
    return this._http.post(this.urlServicio, { contenidoArchivo });
  }
}
