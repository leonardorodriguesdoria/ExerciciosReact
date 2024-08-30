import React from "react";

class FormularioValidacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: "",
        email: "",
        senha: "",
      },
      erros: {},
    };
  }

  validarCampos = (event) => {
    event.preventDefault();
    const novosErros = {};

    // Validação do campo nome
    if (this.state.form.nome.trim() === "") {
      novosErros.nome = "Por favor, digite o seu nome";
    }

    // Validação do campo email
    if (this.state.form.email.trim() === "") {
      novosErros.email = "Por favor, digite o seu email";
    }

    // Validação do campo senha
    if (this.state.form.senha.trim() === "") {
      novosErros.senha = "Por favor, digite o sua senha";
    }

    if (Object.keys(novosErros).length === 0) {
      console.log(
        "Formulário válido. Basta enviar os dados: ",
        this.state.form
      );
    } else {
      this.setState({ erros: novosErros });
    }
  };

  handleNomeChange = (event) => {
    this.setState({ form: { ...this.state.form, nome: event.target.value } });
  };

  handleEmailChange = (event) => {
    this.setState({ form: { ...this.state.form, email: event.target.value } });
  };

  handleSenhaChange = (event) => {
    this.setState({ form: { ...this.state.form, senha: event.target.value } });
  };

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            value={this.state.form.nome}
            onChange={this.handleNomeChange}
          />
          {this.state.erros.nome && <span>{this.state.erros.nome}</span>}
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={this.state.form.email}
            onChange={this.handleEmailChange}
          />
          {this.state.erros.email && <span>{this.state.erros.email}</span>}
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            type="password"
            value={this.state.form.senha}
            onChange={this.handleSenhaChange}
          />
          {this.state.erros.senha && <span>{this.state.erros.senha}</span>}
        </label>
        <button type="submit" onClick={this.validarCampos}>
          Enviar
        </button>
      </form>
    );
  }
}

export default FormularioValidacao;
