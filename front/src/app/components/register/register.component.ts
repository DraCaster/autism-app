import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.showLogin();
  }

  showLogin(): void{
    $("#forgotten-form").hide();

    $('#login-button').click(function(){
      $("#forgotten-form").hide();
      $('#login-button').fadeOut(800, function(){
        $("#container").fadeIn(800);
      });
    });

    $(".close-btn").click(function(){
      $("#forgotten-form").fadeOut(800,function(){
        $("#login-form").fadeIn(800);
      });
    });
    
              
    $(".forgotten").click(function(e){
      $("#login-form").fadeOut(800, function(){
        $("#forgotten-form").fadeIn(800);
      });
    });

    $('.access').click(function(){
      $("#forgotten-form").fadeOut(800,function(){
        $("#login-form").fadeIn(800);
      });
    });
  }

  user: any = {
    id: null,
    username: "",
    password: "",
    nombre: '',
    email: '',
    perfil: null
  };

  error: string = "";

  onLogin():void{
    this.authService.loginUser(this.user.username, this.user.password)
    .pipe(first())
    .subscribe(
      (data: HttpResponse<any>) => {
        this.user = data.body,
        this.authService.setUser(data.body),
        this.router.navigate(['/etiquetas'])
      },
      error => {
        this.error = "ERROR! Los datos ingresados no son válidos"
    });   
  }

}
