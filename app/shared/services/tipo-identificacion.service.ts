import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoIdentificacion } from '../models/tipo-identificacion';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  constructor(private http: HttpClient) {}
  
    public listar(): Observable<TipoIdentificacion[]> {
      return this.http.get<TipoIdentificacion[]>(`${environment.api}/tipo-identificacion/listar`);
    }
  
    public consultar(id: number): Observable<TipoIdentificacion> {
      return this.http.get<TipoIdentificacion>(`${environment.api}/tipo-identificacion/consultar/${id}`);
    }
  
    public guardar(tipoIdentificacion: TipoIdentificacion): Observable<number> {
      return this.http.post<number>(`${environment.api}/tipo-identificacion/guardar`, tipoIdentificacion);
    }
  
    public actualizar(tipoIdentificacion: TipoIdentificacion): Observable<number> {
      return this.http.put<number>(`${environment.api}/tipo-identificacion/actualizar`, tipoIdentificacion);
    }

    public eliminar(id: number): Observable<void> {
      return this.http.delete<void>(`${environment.api}/tipo-identificacion/eliminar/${id}`);
    }

}
