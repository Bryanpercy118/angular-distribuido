import { Component } from '@angular/core';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-eliminar-registro',
  templateUrl: './eliminar-registro.component.html',
})
export class EliminarRegistroComponent {
  id: number = 0;

  constructor(private registroService: RegistroService) {}

  eliminarRegistro() {
    if (this.id) {
      this.registroService.eliminarRegistro(this.id).subscribe(
        (response) => {
          console.log('Registro eliminado:', response);
        },
        (error) => {
          console.error('Error al eliminar registro:', error);
        }
      );
    }
  }
}
