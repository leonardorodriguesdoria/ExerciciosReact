import React from "react";

class ListaFiltragem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusTarefa: "",
    };
  }

  listaTarefas = [
    { id: 1, nome: "Lavar o Carro", statusTarefa: "Concluída" },
    { id: 2, nome: "Dar comida pro cachorro", statusTarefa: "Concluída" },
    { id: 3, nome: "Estudar Programação", statusTarefa: "Não Concluída" },
    { id: 4, nome: "Lavar a louça", statusTarefa: "Concluída" },
    { id: 5, nome: "Buscar a muié no trabalho", statusTarefa: "Não Concluída" },
    {
      id: 6,
      nome: "Preparar relatório pro trabalho",
      statusTarefa: "Não Concluída",
    },
  ];

  filtrarListaTarefas(value) {
    this.setState({
      statusTarefa: value,
    });
  }

  render() {
    const tarefasFiltradas = this.listaTarefas.filter((tarefa) => {
      if (this.state.statusTarefa === "") return true;
      return tarefa.statusTarefa == this.state.statusTarefa;
    });
    return (
      <div>
        <h1>Componente Lista Filtragem</h1>
        <select
          value={this.state.statusTarefa}
          onChange={(event) => this.filtrarListaTarefas(event.target.value)}
        >
          <option value="">Seleciona uma opção....</option>
          <option value="Concluída">Concluída</option>
          <option value="Não Concluída">Não Concluída</option>
        </select>
        {tarefasFiltradas.map((tarefa) => {
          return (
            <div className="nomeTarefasContainer" key={tarefa.id}>
              <div className="tarefaCard">{tarefa.nome}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListaFiltragem;
