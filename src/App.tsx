import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";

function Pokemon() {
  const queryInfo = useQuery(
    "pokemon",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // if (true) {
      //   throw new Error("Test error");
      // }

      return axios("https://pokeapi.co/api/v2/pokemon").then(
        (res) => res.data.results,
      );
    },
    { refetchOnWindowFocus: false },
  );

  return queryInfo.isLoading ? (
    <div>"Loading..."</div>
  ) : queryInfo.error instanceof Error ? (
    <div>{queryInfo.error.message}</div>
  ) : (
    <div className="App">
      {queryInfo.data.map((result) => {
        return <div key={result.name}>{result.name}</div>;
      })}
    </div>
  );
}

function App() {
  return (
    <div>
      <Pokemon />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
