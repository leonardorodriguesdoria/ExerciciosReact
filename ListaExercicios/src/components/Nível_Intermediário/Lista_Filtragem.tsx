import React, { useState } from "react";
import "./Lista_Filtragem.css";

const tarefas = [
  { id: 1, nomeTarefa: "Limpar Mesa", tarefaConcluida: "Concluída" },
  { id: 2, nomeTarefa: "Lavar Carro", tarefaConcluida: "Concluída" },
  { id: 3, nomeTarefa: "Limpar Computador", tarefaConcluida: "Não Concluída" },
  { id: 4, nomeTarefa: "Manutenção Porta", tarefaConcluida: "Concluída" },
  {
    id: 5,
    nomeTarefa: "Botar comida pro cachorro",
    tarefaConcluida: "Não Concluída",
  },
  {
    id: 6,
    nomeTarefa: "Mandar mensagem para a patroa",
    tarefaConcluida: "Não Concluída",
  },
  { id: 7, nomeTarefa: "Assitir Dr House", tarefaConcluida: "Não Concluída" },
];

function ListaFiltragem() {
  const [statusTarefa, setStatusTarefa] = useState<string>("");

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    return tarefa.tarefaConcluida == statusTarefa;
  });

  console.log(tarefasFiltradas);

  console.log;
  return (
    <div>
      <label>Selecione uma tarefa</label>
      <select
        value={statusTarefa}
        onChange={(event) => setStatusTarefa(event.target.value)}
      >
        <option value="">Selecione uma opção</option>
        <option value="Concluída">Concluída</option>
        <option value="Não Concluída">Não Concluída</option>
      </select>
      <div className="table">
        <div className="tableElements">
          <div className="tableColumns">Nome Tarefa</div>
        </div>
      </div>
      {/* Renderiza as tarefas filtradas */}
      {tarefasFiltradas.map((tarefa) => (
        <div className="nomeTarefasContainer" key={tarefa.id}>
          <div className="tarefaCard">{tarefa.nomeTarefa}</div>
        </div>
      ))}
    </div>
  );
}

export default ListaFiltragem;
