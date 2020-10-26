import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  ojo = true;
  login1: boolean;
  input1: boolean;

  clave = '';
  

  constructor() { 

  }


  ngOnInit(): void {
  }

  cerrarNavbar(){

  $('.navbar-collapse').collapse('hide');

  }

  onClick1(){
    this.ojo = false;
    this.login1 = false;
    $( () => {
      $('[data-toggle="tooltip"]').tooltip();
    });
}

onClick2(){
  this.ojo = true;
  this.login1 = true
  $( () => {
    $('[data-toggle="tooltip"]').tooltip();
  });
}

// Metodo entrar del login
entrar(){
  this.login1 = false;
  this.input1 = true;
  $(document).ready(() => {
      $('#focusClave').trigger('focusClave');
    });
  $('[data-toggle="tooltip"]').tooltip('hide');
  }

  inputLogin() {
    if (this.clave !== '123') {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
    }else {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
    }
  }

}