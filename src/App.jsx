import React from "react";
import LoginForm from "./components/LoginForm";

const INITIAL_STATE = { name: "Ivy" };
window.stateValues = [INITIAL_STATE];

function generateName() {
  const names = [
    "Ivy",
    "Liam",
    "Noah",
    "Emma",
    "Olivia",
    "Ava",
    "Mason",
    "Ethan",
    "Sophia",
    "Mia",
    "Lucas",
    "Amelia",
    "Harper",
    "Evelyn",
    "Logan",
    "Minh",
    "An",
    "Linh",
    "Hoa",
    "Quynh",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function App() {
  const [user, setUser] = React.useState(INITIAL_STATE);

  return (
    <>
      <button
        onClick={() => {
          const nextUser = { name: generateName() };
          setUser(nextUser);
          window.stateValues.push(nextUser);
        }}
      >
        Edit name
      </button>
      <div>{JSON.stringify(user, null, 2)}</div>
    </>
  );
}

export default App;
