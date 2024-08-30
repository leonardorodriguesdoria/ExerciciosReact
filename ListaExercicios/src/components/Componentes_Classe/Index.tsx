import React from "react";
import { Iindex } from "./Iindex";

class ComponenteClasse extends React.Component {
  constructor(props: Iindex) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Primeiro Componente de classe</h1>
        <p>Canal: {this.props.canal}</p>
      </div>
    );
  }
}

export default ComponenteClasse;
