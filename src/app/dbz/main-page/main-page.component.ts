import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.intarface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

constructor(){
  window.addEventListener('beforeunload', function(evt) {
    evt.preventDefault();
    evt.returnValue = 'asddasd';
    console.log(evt.returnValue);
  });

  
}

  personajes: Personajes[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  // nuevo: Personajes = {
  //   nombre: '',
  //   poder: 0
  // }

  // agregar(): void {
  //   //Verifica que esta vacio
  //   if(this.nuevo.nombre.trim().length === 0){
  //     return;
  //   } else {
      
  //   }

  //   console.log(this.nuevo)
    
  //   this.personajes.push( this.nuevo );

  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }
    
  // }
  
  // cambiarNombre( event: any ) {
  //   console.log(event.target.value);
  // }

   nuevo: Personajes = {
    nombre: 'Personaje DBZ',
    poder: 9000
  }

}
