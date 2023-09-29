import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-front';

  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'house',
      router: '/home',
    },
    {
      label: 'Projetos',
      icon: 'code',
      router: '/'
    },
    {
      label: 'Sobre',
      icon: 'help',
      router: '/about'
    },
    {
      label: 'Contatos',
      icon: 'contacts',
      router: '/'
    }
  ];


  constructor() { }

  location(path: string): void {
    document.location.href = path;
  }


}