import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>


        <!--<button (click)="numero = numero+1;" >+1</button>-->
        <!--<button (click)="sumar()" >+1</button>-->
        <button (click)="acumular(+base)"> +{{base}} </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> -{{base}} </button>
        <!--<button (click)="restar()" >-1</button>-->
        <!--<button (click)="numero = numero-1;" >-1</button>-->
    `
})

export class ContadorComponet{
    titulo:string = 'Contador APP';
    numero:number = 10;
    base:number =5;
  
    sumar(){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
  
    acumular(valor:number){
  
      if(this.numero==1 && valor==-1){
        this.numero =1;
      }else{
        this.numero +=valor;
      }
      
    }
}