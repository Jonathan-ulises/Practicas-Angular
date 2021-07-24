import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.intarface';

@Injectable()
export class DbzService {
    
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

    /*
    Se usa el Spreed operator para mandar un nuevo arreglo, esto se hiso para tener mas
    seguridad en los datos, ya que en javascript todo lo manda por referencia
    */
    get getPersonajes(): Personajes[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personajes ): void {
        this._personajes.push( personaje );
    }

}