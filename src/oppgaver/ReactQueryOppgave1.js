import React, { useState } from 'react'

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

// Oppgave 1: Instansier en queryClient
const queryClient = undefined

export function ReactQueryOppgave1() {
  const [repo, setRepo] = useState();
  return (
    // Oppgave 2: Wrap hele komponenten i en provider som gir deg tilgang på cachen med queryClienten du laga over
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
  // Oppgave 4: Bruk React Query til å hente ut data om noen repoer på github
  // a. Finn en queryKey som gjør at cachen blir unik.
  // b. Send inn en fetcher som gir deg dataen du vil ha med repo-verdien
  // Hjelpefunksjon: await axios.get(`https://api.github.com/repos/${repo}`).then((res) => res.data)
  const { isLoading, error, data, isFetching  } = useQuery(
    '',
    () => {},
    // Oppgave 6: Få React Query bare til å trigge datahentingen dersom repo er definert (ikke undefined)
    // Fortsatt ikke lov å tweake defaultverdien til hooken 👊
    // Kommenter inn visningslogikken under når dette er gjort
    {}
  );

  // Kommenter inn denne når oppgave 6 er gjort
  // if (!repo) return <p>No repo chosen</p>

  // Oppgave 5: Ta hensyn til loading og error staten fra det React Query returnerer til deg.
  // Kommenter inn linjene under når du har det du trenger
  // Tips: https://react-query.tanstack.com/reference/useQuery
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>An error has occurred: {error.message}</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count} </strong>{" "}
      <strong>✨ {data.stargazers_count} </strong>{" "}
      <strong>🍴 {data.forks_count} </strong>
      {/* Oppgave 7:Hent isFetching fra useQuery for å se når oppdateringer skjer og kommenter inn linja under */}
      {/* <div>{isFetching ? "Updating..." : ""}</div> */}
      
      {/* Oppgave 3: Legg inn devtools for react query rett før slutt-div'en så du kan se hva som egentlig skjer. */}
      {/* Hint: import { ReactQueryDevtools } from "react-query/devtools"; */}
      {/* Tips: Send med initialIsOpen som en bolsk prop for å få den til å dukke opp med en gang. */}
      
    </div>
  );
}
