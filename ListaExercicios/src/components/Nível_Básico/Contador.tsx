import React, { useState } from "react";

function Contador(props: any) {
  let [contador, setContador] = useState(0);

  const handleContador = () => {
    setContador(++contador);
  };

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={handleContador}>Incrementar</button>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default Contador;
