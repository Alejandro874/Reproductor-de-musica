import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoOrden } from '../models/estado-orden';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoOrdenService {

  constructor(private http: HttpClient) {}

  public listar(): Observable<EstadoOrden[]> {
    return this.http.get<EstadoOrden[]>(`${environment.api}/estado-orden/listar`);
  }

  public consultar(id: number): Observable<EstadoOrden> {
    return this.http.get<EstadoOrden>(`${environment.api}/estado-orden/consultar/${id}`);
  }

  public guardar(estadoOrden: EstadoOrden): Observable<number> {
    return this.http.post<number>(`${environment.api}/estado-orden/guardar`, estadoOrden);
  }

  public actualizar(estadoOrden: EstadoOrden): Observable<number> {
    return this.http.put<number>(`${environment.api}/estado-orden/actualizar`, estadoOrden);
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/estado-orden/eliminar/${id}`);
  }


}
