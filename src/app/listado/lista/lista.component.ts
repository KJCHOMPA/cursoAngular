import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {
  
  heroes: string[] = ['spiderman','thor','locky','hulk','iron man']
  heroeBorrado:string='';
  borrarHeroe(){
    
    //this.heroes.pop(); //Borra desde el final
    //heroeBorrado = this.heroes.shift(); //Borra desde el inicio
    this.heroeBorrado = this.heroes.shift() || '';

    console.log(this.heroeBorrado);
    
  }
}
