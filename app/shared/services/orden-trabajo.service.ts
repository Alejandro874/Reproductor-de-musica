import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OrdenTrabajo } from '../models/orden-trabajo';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {

  constructor(private http: HttpClient) {}

  public listar(): Observable<OrdenTrabajo[]> {
    return this.http.get<OrdenTrabajo[]>(`${environment.api}/orden-trabajo/listar`);
  }

  public consultar(id: number): Observable<OrdenTrabajo> {
    return this.http.get<OrdenTrabajo>(`${environment.api}/orden-trabajo/consultar/${id}`);
  }

  public guardar(ordenTrabajo: OrdenTrabajo): Observable<number> {
    return this.http.post<number>(`${environment.api}/orden-trabajo/guardar`, ordenTrabajo);
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/orden-trabajo/eliminar/${id}`);
  }


}
