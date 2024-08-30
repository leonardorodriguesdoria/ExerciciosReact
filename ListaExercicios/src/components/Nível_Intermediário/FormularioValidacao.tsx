import React, { useState } from "react";
import { IFormularioValidacao } from "./FormularioValidacao.interface";

const FormularioValidacao: React.FC = () => {
  const [form, setForm] = useState<IFormularioValidacao>({
    name: "",
    email: "",
    password: "",
  });
  const [erros, setErros] = useState<Partial<IFormularioValidacao>>({});

  const validarCampos = (event: React.FormEvent) => {
    event.preventDefault();
    const novosErros: Partial<IFormularioValidacao> = {};

    // Validação do campo nome
    if (form.name.trim() === "") {
      novosErros.name = "Por favor, digite o seu nome.";
    }

    // Validação do campo email
    if (form.email.trim() === "") {
      novosErros.email = "Por favor, digite o seu email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      novosErros.email = "Por favor, digite um email válido.";
    }

    // Validação do campo senha
    if (form.password.trim() === "") {
      novosErros.password = "Por favor, digite a sua senha.";
    }
    if (Object.keys(novosErros).length === 0) {
      console.log("Formulário válido. Basta enviar os dados: ", form);
    } else {
      setErros(novosErros);
    }

    setErros(novosErros);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: event.target.value });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleNameChange}
        />
        {erros.name && <span>{erros.name}</span>}
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleEmailChange}
        />
        {erros.email && <span>{erros.email}</span>}
      </label>
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handlePasswordChange}
        />
        {erros.password && <span>{erros.password}</span>}
      </label>
      <button type="submit" onClick={validarCampos}>
        Enviar
      </button>
    </form>
  );
};

export default FormularioValidacao;
