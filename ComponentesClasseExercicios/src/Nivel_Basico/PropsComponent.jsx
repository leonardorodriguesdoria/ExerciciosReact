import React from "react";

class PropsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Props Component
        <p>Olá : {this.props.nome}</p>
      </div>
    );
  }
}

export default PropsComponent;
