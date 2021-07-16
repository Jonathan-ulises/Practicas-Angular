import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCaptitalizado() : string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad() : void {
        this.edad = 20;
    }
}