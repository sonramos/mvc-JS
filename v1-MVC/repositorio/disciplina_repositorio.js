class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const idxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (idxDisciplinaARemover > -1) {
            this.disciplinas.splice(idxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}