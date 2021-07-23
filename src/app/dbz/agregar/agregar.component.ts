import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';

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

  /*
   Salida de informacion con el EventEmitter. Este crea eventos para enviar informacion
   entre componentes. Al eventEmitter se le configura el tipo de datos que enviar al momento
   de llamar el evento. El nombre de este evento es personalizado, puede ser cualquiera que
   queramos, pero se puede iniciar con el prefijo 'on'. La informacion a enviar se Emite al
   momento de ejecutar el evento.
   */
  @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();

  /**
   * Agrega nuevos Personajes (los emite)
   * @returns No devuelve valor
   */
  agregar(): void {
    //Verifica que esta vacio
    if(this.nuevo.nombre.trim().length === 0){
      return;
    } else {
      
    }

    //Asignacion del valor de informacion a emitir (enviar)
    this,this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  
  }

}
