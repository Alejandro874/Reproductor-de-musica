import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) {}

  public listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${environment.api}/tarea/listar`);
  }

  public consultar(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${environment.api}/tarea/consultar/${id}`);
  }

  public guardar(tarea: Tarea): Observable<number> {
    return this.http.post<number>(`${environment.api}/tarea/guardar`, tarea);
  }

  public actualizar(tarea: Tarea): Observable<number> {
    return this.http.put<number>(`${environment.api}/tarea/actualizar`, tarea);
  }

  public estado(tarea: Tarea): Observable<number> {
    return this.http.patch<number>(`${environment.api}/tarea/estado`, tarea)
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/tarea/eliminar/${id}`);
  }

}
