import React from "react";

import { LoggedInBanner } from "./components/Banner";

const EXAMPLE_USER = {
  name: "Sayen",
  registrationStatus: "verified",
};

function App() {
  return (
    <LoggedInBanner type={"success"} user={EXAMPLE_USER}>
      Successfully logged in! Welcome aboard, {""}
      {EXAMPLE_USER.name}!
    </LoggedInBanner>
  );
}

export default App;
