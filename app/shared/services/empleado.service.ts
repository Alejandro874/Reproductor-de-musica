import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) {}

  public listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${environment.api}/empleado/listar`);
  }

  public consultar(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${environment.api}/empleado/consultar/${id}`);
  }

  public guardar(empleado: Empleado): Observable<number> {
    return this.http.post<number>(`${environment.api}/empleado/guardar`, empleado);
  }

  public actualizar(empleado: Empleado): Observable<number> {
    return this.http.put<number>(`${environment.api}/empleado/actualizar`, empleado);
  }

  public estado(empleado: Empleado): Observable<number> {
    return this.http.patch<number>(`${environment.api}/empleado/estado`, empleado)
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/empleado/eliminar/${id}`);
  }

}
