import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  crearRegistro(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registros`, data);
  }

  eliminarRegistro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/registros/${id}`);
  }
}
