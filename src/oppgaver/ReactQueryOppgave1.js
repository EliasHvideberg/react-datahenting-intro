import React, { useState } from 'react'

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

const queryClient = new QueryClient();

export function ReactQueryOppgave1() {
  const [repo, setRepo] = useState("bekk/react-intro");
  return (
    <QueryClientProvider client={queryClient}>
      <p>Choose your repo</p>

      <button onClick={() => setRepo("bekk/react-intro")}>Intro til React</button>
      <button onClick={() => setRepo("tannerlinsley/react-query")}>react-query</button>
      <button onClick={() => setRepo("entur/tavla")}>Entur Tavla</button>
      
      <Example repo={repo} />
    </QueryClientProvider>
  );
}

function Example({ repo }) {
  const { isLoading, error, data, isFetching } = useQuery(
    ["repoData", repo],
    () =>
      axios.get(`https://api.github.com/repos/${repo}`).then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>
        👀
        {data.subscribers_count}
      </strong>{" "}
      <strong>
        ✨
        {data.stargazers_count}
      </strong>{" "}
      <strong>
        🍴
        {data.forks_count}
      </strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
