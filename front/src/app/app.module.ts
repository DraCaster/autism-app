import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { DataService } from './services/data.service';
import { DatePipe } from '@angular/common';



import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SobreDenverComponent } from './components/sobre-denver/sobre-denver.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ExamenTEAComponent } from './components/examen-tea/examen-tea.component';
import { HistorialExamenesComponent } from './components/historial-examenes/historial-examenes.component';
import { AreaNivelComponent } from './components/area-nivel/area-nivel.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { DetalleRutinaComponent } from './components/detalle-rutina/detalle-rutina.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    SobreDenverComponent,
    CalendarioComponent,
    EstadisticasComponent,
    PacientesComponent,
    ExamenTEAComponent,
    HistorialExamenesComponent,
    AreaNivelComponent,
    ComentarioComponent,
    PlanificacionComponent,
    RutinasComponent,
    DetalleRutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
