import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environments';

export interface Registro {
  id: number;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombre1: string;
  nombre2?: string;
  apellido1: string;
  apellido2?: string;
  sexo: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  crearRegistro(data: Registro): Observable<any> {
    return this.http.post(`${this.apiUrl}/registros`, data);
  }

  eliminarRegistro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/registros/${id}`);
  }
}
