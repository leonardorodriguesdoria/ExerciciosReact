import React from "react";

class ListaItens extends React.Component {
  LISTA_ITENS_INFORMATICA = [
    "Monitor",
    "Mouse",
    "Teclado",
    "Gabinete",
    "MousePad",
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Lista Itens</h1>
        {this.LISTA_ITENS_INFORMATICA.map((iten) => {
          return (
            <ul>
              <li>{iten}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default ListaItens;
