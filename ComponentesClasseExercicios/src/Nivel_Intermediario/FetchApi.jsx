import React from "react";
import "./FetchApi.css";

class FetchApi extends React.Component {
  urlApi = "https://rickandmortyapi.com/api/character";
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    const fetchApi = async () => {
      try {
        const response = await fetch(this.urlApi, { method: "GET" });
        const data = await response.json();
        this.setState({ characters: data.results });
      } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
      }
    };
    fetchApi();
  }

  render() {
    return (
      <div>
        <h1>FetchApi</h1>
        {this.state.characters.map((character) => {
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
  }
}

export default FetchApi;
