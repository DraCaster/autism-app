import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { RegisterComponent } from './components/register/register.component';
import { SobreDenverComponent } from './components/sobre-denver/sobre-denver.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobre_denver', component: SobreDenverComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'pacientes', component: PacientesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
