import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
})
export class CrearRegistroComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroService
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.registroService.crearRegistro(this.registroForm.value).subscribe(
        (response) => {
          console.log('Registro creado:', response);
        },
        (error) => {
          console.error('Error al crear registro:', error);
        }
      );
    }
  }
}
