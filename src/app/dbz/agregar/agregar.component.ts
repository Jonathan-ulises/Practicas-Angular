import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input('dataNP') nuevo: Personajes = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService) {
    
  }

  /**
   * Agrega nuevos Personajes (los emite)
   * @returns No devuelve valor
   */
  agregar(): void {
    //Verifica que esta vacio
    if(this.nuevo.nombre.trim().length === 0){
      return;
    } 

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  
  }

}
