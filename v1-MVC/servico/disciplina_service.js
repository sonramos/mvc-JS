class DisciplinaService {

    constructor() {
        this.repositorio = new DisciplinaRepositorio();
        this.alunoService = new AlunoService();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já consta no banco de dados!')
        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    atualizar(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length < 1) {
            throw new Error('Disciplina não consta no banco de dados!')
        }
        disciplinaPesquisada.nome = nome;
        return disciplinaPesquisada;
    }

    inserirAlunoNaDisciplina(codigo, nomeAluno, idadeAluno, matriculaAluno) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length < 1) {
            throw new Error('Disciplina não consta no banco de dados!')
        }
        const alunoAInserir = this.alunoService.inserir(nomeAluno, idadeAluno, matriculaAluno);
        disciplinaPesquisada.alunos = this.alunoService.repositorio.listar();
        return alunoAInserir;
    }
}