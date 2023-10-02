import { Component, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  protected showPageHome: boolean = true;

  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'house',
      router: '/home',
    },
    {
      label: 'Sobre',
      icon: 'help',
      router: '/about'
    },
    {
      label: 'Projetos',
      icon: 'code',
      router: '/projects'
    },
    {
      label: 'Contatos',
      icon: 'contacts',
      router: '/contacts'
    }
  ];


  constructor(private router: Router) { 
    this.showHome();
  }

  ngOnInit(): void { }

  showHome(): void {
//     let path: string = this.router.url;
    
// console.log(path)

//     if(path == '/' || path != '/home'){
//       this.showPageHome = false;
//     } else {
//       this.showPageHome = true;
//     }
  }

  location(path: string): void {
    document.location.href = path;
  }

}