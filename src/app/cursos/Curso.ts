//Classe
export class Curso{
    //Atributos
    public nomeCurso:string | undefined;
    public valorCurso:number | undefined;
    public areaCurso:string | undefined;  
    
    //Construtor
    constructor(nome:string, valor:number, area:string){
        this.nomeCurso = nome;
        this.valorCurso = valor;
        this.areaCurso = area;
    }
}