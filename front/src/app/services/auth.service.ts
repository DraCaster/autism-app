import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private dataService: DataService) { }

  private token: string;
  
  //metodo hardcoded utilizado actualmente
  loginUser_HD(username: string, pass: string){
    const url_api = "";

    let user : any = {
      id : null,
      nombre: null,
      apellido: null,
      email: null,
      usuario: null,
      clave: null,
    }

    if(username == "test" && pass == "test"){
      user.id = 1;
      user.usuario = username;
      user.clave = pass;
      this.setUser(user);
    }
    return user;
  }

  loginUser(username: string, pass: string){
    const url_api = `auth`;

    let user : UserInterface = {
      id : null,
      nombre: null,
      apellido: null,
      email: null,
      usuario: username,
      clave: pass
    }

    return (this.http.post(url_api, user, {observe: 'response'})
    .pipe(map(data => {
      this.setUser(data.body);
      this.setToken(data.headers.get('Auth'));
      return data;
    })));
  }
  
  private setToken(token: string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private getToken(): string{
    if(this.token != null ){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token
  }

  isLogged(){
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
      'username': user.usuario,
      'name': user.nombre
    }

    let user_string = JSON.stringify(cadena);
    localStorage.setItem("currentUser", user_string);
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