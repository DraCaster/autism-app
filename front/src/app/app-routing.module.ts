import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaNivelComponent } from './components/area-nivel/area-nivel.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ExamenTEAComponent } from './components/examen-tea/examen-tea.component';
import { HistorialExamenesComponent } from './components/historial-examenes/historial-examenes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
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
  { path: 'examen_TEA', component: ExamenTEAComponent },
  { path: 'historial_examenes_TEA', component: HistorialExamenesComponent },
  { path: 'area_nivel', component: AreaNivelComponent },
  { path: 'planificacion', component: PlanificacionComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
