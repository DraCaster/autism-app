import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#slideRight").click(function() {
      event.preventDefault();
      $(".scrollmenu").animate(
        {
          scrollLeft: "+=300px"
        },
        "slow"
      );
    });
    
    $("#slideLeft").click(function() {
      event.preventDefault();
      $(".scrollmenu").animate(
        {
          scrollLeft: "-=300px"
        },
        "slow"
      );
    });

    
  }

  counter(i: number): number[] {
    return new Array(i);
  }

  week(): number[]{
    return this.counter(30);
  }


 }
