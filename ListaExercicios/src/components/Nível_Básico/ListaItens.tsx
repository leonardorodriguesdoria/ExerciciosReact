import React from "react";

function ListaItens() {
  const produtos: Array<String> = [
    "Monitor",
    "Teclado",
    "Mouse",
    "MousePad",
    "Gabinete",
  ];

  return (
    <div>
      <h1>Lista Itens</h1>
      <div>
        <ul>
          {produtos.map((produto) => {
            return <li>{produto}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListaItens;
