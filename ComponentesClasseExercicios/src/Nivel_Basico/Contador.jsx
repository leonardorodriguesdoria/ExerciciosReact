import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contadorNumerico: 0,
    };
  }

  AumentarValor() {
    this.setState({
      contadorNumerico: ++this.state.contadorNumerico,
    });
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>Contador:{this.state.contadorNumerico}</p>
        <button onClick={() => this.AumentarValor()}>Incrementar Valor</button>
      </div>
    );
  }
}

export default Contador;
