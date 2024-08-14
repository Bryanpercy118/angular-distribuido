import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { EliminarRegistroComponent } from './components/eliminar-registro/eliminar-registro.component';

const routes: Routes = [
  { path: 'crear', component: CrearRegistroComponent },
  { path: 'eliminar', component: EliminarRegistroComponent },
  { path: '', redirectTo: '/crear', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
