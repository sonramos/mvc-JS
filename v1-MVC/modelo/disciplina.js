class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(novoCodigo){
        this._codigo = novoCodigo;
    }
    get alunos(){
        return this._alunos;
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }
}