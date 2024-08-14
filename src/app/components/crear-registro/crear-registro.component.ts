import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from '../../services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
})
export class CrearRegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      id: [null, Validators.required],
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellido1: ['', Validators.required],
      apellido2: [''],
      sexo: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoRegistro: Registro = this.registroForm.value;

      // Guardar el registro en localStorage
      const registros = JSON.parse(localStorage.getItem('registros') || '[]');
      registros.push(nuevoRegistro);
      localStorage.setItem('registros', JSON.stringify(registros));

      // Mostrar popup de confirmación
      alert('Registro guardado exitosamente.');

      // Limpiar los campos del formulario
      this.registroForm.reset();
    }
  }
}
