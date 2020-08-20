import React from "react";
import { NeoGraph, ResponsiveNeoGraph } from "./NeoGraph";

const NEO4J_URI = "YOUR-BOLT-URI-HERE";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "YOUR-NEO4J-PASSWORD-HERE";

const App = () => {
  return (
    <div className="App" style={{ fontFamily: "Quicksand" }}>
      <h1>React Neovis Example</h1>
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
      />
      <NeoGraph
        width={400}
        height={300}
        containerId={"id1"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        backgroundColor={"#b2beb5"}
      />
    </div>
  );
};

export default App;
