import React, { useState } from "react";

function Formulario() {
  const [formDataName, setFormDataName] = useState("");
  const [formDataEmail, setFormDataEmail] = useState("");

  return (
    <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formDataName}
            onChange={(event) => setFormDataName(event.target.value)}
            placeholder="Insira seu nome...."
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formDataEmail}
            onChange={(event) => setFormDataEmail(event.target.value)}
            placeholder="Insira seu email...."
          />
        </div>
      </form>
      <p>Nome:{formDataName}</p>
      <p>Email:{formDataEmail}</p>
    </div>
  );
}

export default Formulario;
