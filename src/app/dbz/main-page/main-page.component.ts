import { Component } from '@angular/core';

interface Personajes {
  nombre: string;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo: Personajes = {
    nombre: 'Trucks',
    poder: 14000
  }

  agregar(): void {
    console.log(this.nuevo);
  }
  
  cambiarNombre( event: any ) {
    console.log(event.target.value);
  }
}
