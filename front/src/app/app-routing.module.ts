import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaNivelComponent } from './components/area-nivel/area-nivel.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DetalleRutinaComponent } from './components/detalle-rutina/detalle-rutina.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ExamenTEAComponent } from './components/examen-tea/examen-tea.component';
import { HistorialExamenesComponent } from './components/historial-examenes/historial-examenes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { RegisterComponent } from './components/register/register.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { SobreDenverComponent } from './components/sobre-denver/sobre-denver.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobre_denver', component: SobreDenverComponent, canActivate: [AuthGuard]  },
  { path: 'cronograma', component: CalendarioComponent, canActivate: [AuthGuard]  },
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [AuthGuard]  },
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard]  },
  { path: 'examen_TEA', component: ExamenTEAComponent, canActivate: [AuthGuard]  },
  { path: 'historial_examenes_TEA', component: HistorialExamenesComponent, canActivate: [AuthGuard]  },
  { path: 'area_nivel', component: AreaNivelComponent, canActivate: [AuthGuard]  },
  { path: 'planificacion', component: PlanificacionComponent, canActivate: [AuthGuard]  },
  { path: 'rutina', component: RutinasComponent, canActivate: [AuthGuard]  },
  { path: 'detalle_rutina', component: DetalleRutinaComponent, canActivate: [AuthGuard]  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
