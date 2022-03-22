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

  //Seleção de cursos

  //Seleção de um curso específico

  //Alteração de cursos

  //Exclusão de cursos
}
