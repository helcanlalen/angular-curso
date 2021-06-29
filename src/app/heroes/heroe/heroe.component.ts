import {Component} from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: String = 'Iroman';
    edad  : number = 45;

    obtenerNombre(): String{
        return `Hola ${this.nombre} tengo ${this.edad} años`
    }

    get nombreCapitalizado(): String{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman'
    }

    cambiarEdad(): void {
        this.edad = 100;
    }

}