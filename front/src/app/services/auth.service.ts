import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private dataService: DataService) { }

  loginUser(username: string, pass: string){
    // const url_api = environment.url + `usuarios/login`;
    const url_api = "";

    let user : any = {
      id : null,
      username: username,
      password: pass,
      nombre: null,
      email: null,
      perfil: null,
    }

    return (this.http.post(url_api, user, {observe: 'response'})
    .pipe(map(data => {
      this.setUser(data.body);
      return data;
    })));
  }
  

  isNotLogged(){
    return (this.getCurrentUser() != null);
  }
  
  isManager():boolean{
    return this.getCurrentUser().profile == "";
  }

  isAuthorized(){
    return (this.getCurrentUser().profile == "" || this.getCurrentUser().profile == "");
  }

  setUser(user: any){
    let cadena = {
      'username': user.username,
      'name': user.nombre,
      'profile': user.perfil.nombre
    }

    let user_string = JSON.stringify(cadena);
    localStorage.setItem("currentUser", user_string)
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if( user_string != null ){
      return JSON.parse(user_string);
    }
    return null;
  }

  logoutUser(){
    localStorage.removeItem("currentUser");
  }

}