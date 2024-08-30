import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListaFiltragem from "./components/Nível_Intermediário/Lista_Filtragem";
import FormularioValidacao from "./components/Nível_Intermediário/FormularioValidacao";
import FetchApi from "./components/Nível_Intermediário/FetchApi";
import ComponenteClasse from "./components/Componentes_Classe/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FetchApi />
      <ComponenteClasse canal="CFB Cursos" />
    </>
  );
}

export default App;
