import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Criar variáveis
  nome:string = "Carl";
  imagem:string = "https://www.viajali.com.br/wp-content/uploads/2017/09/paisagens-lindas-21.jpg"
  valor1:number = 1;
  valor2:number = 2;
}
