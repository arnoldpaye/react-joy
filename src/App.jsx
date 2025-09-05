import React from "react";

import LinkButton from "./components/LinkButton";

function App() {
  function exportData() {
    console.log("exportData function invoked");
  }

  return (
    <main>
      <LinkButton href={"/add-transaction"}>Add Transaction</LinkButton>
      <LinkButton href={"/report"}>View Report</LinkButton>
      <LinkButton onClick={exportData}>Export All Data</LinkButton>
    </main>
  );
}

export default App;
