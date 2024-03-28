import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const queryInfo = useQuery("pokemon", () =>
    fetch("https://pokeapi.com/api/v2/pokemon").then((res) => res.json()),
  );

  console.log("queryInfo", queryInfo);

  return <div className="App">hi</div>;
}

export default App;
