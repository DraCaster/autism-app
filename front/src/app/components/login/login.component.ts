import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserInterface } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  user: UserInterface = {
    id: null,
    nombre: "",
    apellido: "",
    email: '',
    usuario: "",
    clave: "",
  };

  error: string = "";


  // Este metodo es el hardcoded que se esta utilizando actualmente
  // Para probar el onLogin() hay que modificar en el form el metodo invocado

  onLoginHD():void{
    this.user = this.authService.loginUser_HD(this.user.usuario, this.user.clave);

    if (this.user.id != null){
        this.router.navigate(['/sobre_denver'])
    }
  }

  onLogin() {
    this.authService.loginUser(this.user.usuario, this.user.clave)
    .pipe(first())
    .subscribe(
      (data: HttpResponse<any>) => {
        this.user = data.body,
        this.authService.setUser(data.body),
        this.router.navigate(['/sobre_denver'])
      },
      error => {
        this.error = "ERROR! Los datos ingresados no son válidos"
    });   
  }

}
