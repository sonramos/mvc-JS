class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nomeMatricula");
        const codigoElemento = document.querySelector("#codigoMatricula");
        const disciplinaInserida = this.servico.inserir(Number(codigoElemento.value), nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Código: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}