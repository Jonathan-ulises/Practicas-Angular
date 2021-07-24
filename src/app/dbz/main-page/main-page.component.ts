import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes: Personajes[] = [];

  constructor(
  ) {
    //this.personajes = this.dbzServices.personajes;
  }

  // get personajes(): Personajes[] {
  //   return this.dbzServices.personajes;
  // }

  nuevo: Personajes = {
    nombre: 'Personaje DBZ',
    poder: 9000
  }

  // //Metodo para capturar los datos del evento creado (evenEmitter)
  // agregarNuevoPersonaje(argumento: Personajes) {
  //   //Debugear con el navegador.
  //   //debugger;
  //   this.personajes.push(argumento);
  // }


}
