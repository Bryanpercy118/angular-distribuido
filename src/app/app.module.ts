import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { EliminarRegistroComponent } from './components/eliminar-registro/eliminar-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    EliminarRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,        
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
