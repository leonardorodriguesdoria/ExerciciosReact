import React from "react";

class PrimeiroComponenteClasse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Primeiro componente de classe</h1>
        <p>Canal: {this.props.nomeCurso}</p>
        <p>Aluno: {this.props.nomeAluno}</p>
      </div>
    );
  }
}

export default PrimeiroComponenteClasse;
