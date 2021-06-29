import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: String[] = ['Goku', 'Vegeta', 'Pika'];
  heroeBorrado: String = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()|| '';
  }

}
