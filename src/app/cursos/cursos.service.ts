import { Injectable } from '@angular/core';
import { Curso } from './Curso';

//Acesso total do serviço
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  //Vetor de cursos
  private vetorCursos:Curso[] = [
    new Curso("Angular", 800, "Desenvolvimento"),
    new Curso("PHP", 590, "Desenvolvimento"),
    new Curso("Photoshop", 470, "Desenvolvimento")  
  ];

  //Cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }

  //Seleção de cursos
  public listar(){
    return this.vetorCursos;
  }

  //Seleção de um curso específico

  //Alteração de cursos

  //Exclusão de cursos
}
