import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /*
  El input nos ayuda para poder asignar valores a una propiedad (variable) desde otro componente,
  este input puede o no tener un nombre (en este caso 'data'), este ayuda a referenciar la propiedad a
  la que vamos a asinarle valores; si no tiene nombre, haremos referencia al input con el nombre de la
  propiedad
  */
  @Input('data') personajes: Personajes[] = [];

  constructor(
    private dbzServices: DbzService
  ){

  }
}
