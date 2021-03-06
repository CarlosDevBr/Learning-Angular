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
  public vetorCursos:Curso[] | undefined;
  public curso:Curso | undefined;
  public id: number | undefined;

  //Construtor
  constructor(private servico:CursosService) { }

  //Inicialização
  ngOnInit() {
    this.id = -1;
    this.curso = new Curso("teste", 404, "teste");
    this.vetorCursos = this.servico.listar();
  }

  //Cadastrar
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = new Curso();
  }

  //Excluir
  excluir(id:number){
    this.servico.excluir(id);
    this.id = -1;
  }

  //Editar
  editar(id:number){
    this.id = id;

    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }
}
