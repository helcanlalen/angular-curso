import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 2000
        },
        {
          nombre: 'Gohan',
          poder: 1500
        }
      ];
    
    get personajes(): Personaje[]{
        return [...this._personajes];
    }    

    constructor(){
        console.log('servicio inicializado');
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}