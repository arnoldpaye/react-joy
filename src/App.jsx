import React from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  function handleLogin(event) {
    event.prevetDefault();
    setIsLoggedIn(true);
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <p>You're already logged in!</p>
          <button
            onClick={(event) => {
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
