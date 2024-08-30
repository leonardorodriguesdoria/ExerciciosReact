import React from "react";

class CarroCicloDeVida extends React.Component {
  modelo = "Golf";
  constructor(props) {
    super(props);
    this.state = {
      ligado: false,
      velocidadeAtual: 0,
    };
    this.ld = this.ligarDesligarCarro.bind(this); //Obs: O this referencia o próprio objeto da classe dentro da própria classe
  }

  ligarDesligarCarro() {
    // this.setState({
    //   ligado: !this.state.ligado,
    // });
    this.setState((state) => ({
      ligado: !state.ligado,
    }));
  }

  acelerarCarro() {
    this.setState((state, props) => ({
      velocidadeAtual: state.velocidadeAtual + props.fator,
    }));
  }

  componentDidMount() {
    console.log("Carro Criado com Sucesso!!!");
  }

  componentDidUpdate() {
    console.log("O carro foi atualizado");
  }

  componentWillUnmount() {
    console.log("O carro foi destruído!!!");
  }

  render() {
    return (
      <div>
        <h1>Meu Carro</h1>
        <p>Modelo do Carro: {this.modelo}</p>
        <p>{this.state.ligado ? "Ligado" : "Desligado"}</p>
        <p>Velocidade Atual: {this.state.velocidadeAtual}</p>
        <button onClick={this.ld}>
          {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
        </button>
        <button onClick={() => this.acelerarCarro()}>Acelerar</button>
      </div>
    );
  }
}

export default CarroCicloDeVida;
