import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = "";

  borrarElemento(): void {
    if (this.heroes.length != 0) {
      console.log("Borrando.....");
      this.heroeBorrado = this.heroes.pop() || '';
    } else {
      console.log("Lista limpia");
      this.heroeBorrado = "Sin heroes";
    }
  }

}
