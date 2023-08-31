class Disciplina {

    constructor(codigo, nome, alunos) {
        this.codigo = codigo;
        this._nome = nome;
        this._alunos = alunos;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos(){
        return this._alunos.listar();
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }
}