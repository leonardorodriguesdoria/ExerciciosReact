import React, { useState, useEffect } from "react";
import "./FetchApi.css";

const FetchApi: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://rickandmortyapi.com/api/character`, {
  //       method: "GET",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCharacters(data.results);
  //       })
  //       .catch((error) => {
  //         console.log(`Ocorreu um erro: ${error}`);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>FetchApi</h1>
      {characters.map((character: any) => {
        return (
          <article className="cardContainer" key={character.id}>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="traitsSection">
              <div className="section">
                <h1>Nome:{character.name}</h1>
                <span>Status:{character.status}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FetchApi;
