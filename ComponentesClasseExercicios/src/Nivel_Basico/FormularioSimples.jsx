import React from "react";

class FormularioSimples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
    };
  }

  ExibirValorNome(eventElementTarget) {
    this.setState({
      nome: eventElementTarget,
    });
  }
  ExibirValorEmail(eventElementTarget) {
    this.setState({
      email: eventElementTarget,
    });
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Insira seu Nome"
            onChange={(event) => this.ExibirValorNome(event.target.value)}
          />
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Informe seu e-mail"
            onChange={(event) => this.ExibirValorEmail(event.target.value)}
          />
        </form>
        <p>Nome: {this.state.nome}</p>
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default FormularioSimples;
