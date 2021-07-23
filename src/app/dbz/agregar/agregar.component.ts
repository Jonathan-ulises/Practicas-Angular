import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input('dataP') personajes: Personajes[] = []

  @Input('dataNP') nuevo: Personajes = {
    nombre: '',
    poder: 0
  }

  agregar(): void {
    //Verifica que esta vacio
    if(this.nuevo.nombre.trim().length === 0){
      return;
    } else {
      
    }

    console.log(this.nuevo)
    
    this.personajes.push( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
