import { useQuery } from "@apollo/client";

import { INFO_PERSON } from "./queries/index";

import "./App.css";

function App() {
  const { loading, error, data } = useQuery(INFO_PERSON);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <section className="parent">
      {data.characters.results.map((shinobi) => (
        <div className="card" key={shinobi.name}>
          <img src={shinobi.avatarSrc} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{shinobi.name}</b>
              <p>Age: {shinobi.age}</p>
            </h4>
            <p>
              <b>About:</b> {shinobi.description}
            </p>
            <p>
              <b>Rank:</b> {shinobi.rank}
            </p>
            <p>
              <b>Village:</b> {shinobi.village}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;
