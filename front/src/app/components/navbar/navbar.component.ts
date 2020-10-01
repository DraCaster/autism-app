import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  user = this.authService.getCurrentUser();

  ngOnInit(): void {
    this.show_menu();
    this.close_menu();
    this.user = this.authService.getCurrentUser();
  }

  close_menu(){
    $(".page-wrapper").removeClass("toggled");
  }

  show_menu():void{

    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });

    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active") ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });
    
    
  }

  onLogout():void{
    this.authService.logoutUser();
  }

  isLogged(){
    return this.authService.isLogged();
  }
}