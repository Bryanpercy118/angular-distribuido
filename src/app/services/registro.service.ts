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
  private apiUrlCrear = environment.apiUrlCrear;
  private apiUrlBorrar = environment.apiUrlBorrar;

  constructor(private http: HttpClient) {}

  // Método para crear un registro
  crearRegistro(data: Registro): Observable<any> {
    return this.http.post(`${this.apiUrlCrear}`, data);
  }

  // Método para borrar un registro
  eliminarRegistro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlBorrar}/${id}`);
  }
}
