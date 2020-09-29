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

  onLogin():void{

    this.user = this.authService.loginUser(this.user.usuario, this.user.clave);

    if (this.user.id != null){
        this.router.navigate(['/sobre_denver'])
    }

    // this.authService.loginUser(this.user.usuario, this.user.clave)
    // .pipe(first())
    // .subscribe(
    //   (data: HttpResponse<any>) => {
    //     this.user = data.body,
    //     this.authService.setUser(data.body),
    //     this.router.navigate(['/sobre_denver'])
    //   },
    //   error => {
    //     this.error = "ERROR! Los datos ingresados no son válidos"
    // });   
  }

}
