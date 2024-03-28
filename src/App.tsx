import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

function App() {
  const queryInfo = useQuery("pokemon", () =>
    axios("https://pokeapi.co/api/v2/pokemon").then((res) => res.data.results),
  );

  return queryInfo.isLoading ? (
    <div>"Loading..."</div>
  ) : (
    <div className="App">
      {queryInfo.data.map((result) => {
        return <div key={result.name}>{result.name}</div>;
      })}
    </div>
  );
}

export default App;
