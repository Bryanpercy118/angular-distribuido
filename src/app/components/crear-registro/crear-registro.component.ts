import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService, Registro } from '../../services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
})
export class CrearRegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.registroForm = this.fb.group({
      tipo_identificacion: ['', Validators.required],
      numero_identificacion: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellido1: ['', Validators.required],
      apellido2: [''],
      sexo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoRegistro = this.registroForm.value;

      // Enviar el registro al backend a través del servicio
      this.registroService.crearRegistro(nuevoRegistro).subscribe(
        (response) => {
          console.log('Registro guardado en el backend:', response);
          alert('Registro guardado exitosamente.');

          // Limpiar los campos del formulario
          this.registroForm.reset();
        },
        (error) => {
          console.error('Error al guardar el registro:', error);
          alert('Hubo un error al guardar el registro.');
        }
      );
    }
  }
}
