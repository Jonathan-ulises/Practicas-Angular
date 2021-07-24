import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.intarface';

@Injectable()
export class DbzService {
    constructor() {
        console.log('Servicio Inicializado');
    }

    private _personajes: Personajes[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get getPersonajes(): Personajes[] {
        return [...this._personajes];
    }
}