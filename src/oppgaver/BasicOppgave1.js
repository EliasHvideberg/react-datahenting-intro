import React, { useState, useEffect } from 'react'
import axios from "axios";

export function BasicOppgave1() {
  const [repo, setRepo] = useState();
  return (
    <div>
      <p>Choose your repo</p>

      <button onClick={() => setRepo("bekk/react-intro")}>Intro til React</button>
      <button onClick={() => setRepo("tannerlinsley/react-query")}>react-query</button>
      <button onClick={() => setRepo("entur/tavla")}>Entur Tavla</button>
      
      <Example repo={repo} />
    </div>
  );
}

function Example({ repo }) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)
    const [data, setData] = useState();

    // Oppgave 1: Lag en useEffect som henter data fra https://api.github.com/repos
    // Hjelpefunksjon: await axios.get(`https://api.github.com/repos/${repo}`).then((res) => res.data)
    // Ta hensyn til loading, error, og når datahentingen er vellykket og du kan vise data
    useEffect(() => {
      const asyncFecther = async () => {
          if (!repo) return
          setIsLoading(true)
          const newData = await axios.get(`https://api.github.com/repos/${repo}`).then((res) => res.data).catch((e) => setError(e))
          setData(newData);
          setIsLoading(false)
      }

      asyncFecther();
  }, [repo]);

  // Oppgave 2: Ta hensyn til at repo-verdien kan være undefined,
  // Altså ikke kall endepunktet før brukeren har valgt et repo
  // Ikke lov å jukse å endre default-verdien til hooken her 😏
  // Kommenter inn linjen under når det er fikset. 
  // if (!repo) return <p>No repo chosen</p>

  if (isLoading) return <p>Loading...</p>;

  if (error || !data) return <p>An error has occurred</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
