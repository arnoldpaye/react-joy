import React from "react";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <header>
        <img className="logo" alt="Foobar" src="" />
      </header>
      <main>
        <form>
          <input
            ref={(r) => {
              inputRef.current = r;
            }}
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
      </main>
    </>
  );
}

export default App;
