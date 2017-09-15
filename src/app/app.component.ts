import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  
  items: Array<any> = []

  constructor() {
    this.items = [
      {
        name: 'assets/images/chica-2.png',
        testimonio: '“¡Mi encuentro con Tom fue genial!, definitivamente seguiremos en contacto. Gracias Tom”',
        nombre: 'Miguel'
      },
      {
        name: 'assets/images/chica-2.png',
        testimonio: '“¡Mi encuentro con Tom fue genial!, definitivamente seguiremos en contacto. Gracias Tom”',
        nombre: 'david'
      },
      {
        name: 'assets/images/chica-2.png',
        testimonio: '“¡Mi encuentro con Tom fue genial!, definitivamente seguiremos en contacto. Gracias Tom”',
        nombre: 'rafa'
      },
      {
        name: 'assets/images/chica-2.png',
        testimonio: '“¡Mi encuentro con Tom fue genial!, definitivamente seguiremos en contacto. Gracias Tom”',
        nombre: 'omar'
      }
    ]
  }


}
