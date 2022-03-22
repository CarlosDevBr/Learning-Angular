import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  private vetorCursos:Curso[] | undefined;
  private curso:Curso | undefined;
  private id: number | undefined;

  //Construtor
  constructor(private servico:CursosService) { }

  //Inicialização
  ngOnInit(): void {
  }

}
