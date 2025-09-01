import React from "react";

import TextInput from "./components/TextInput";
import SearchResult from "./components/SearchResult";

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request,
  with a query parameter of `searchTerm`.
  Eg. `/api/book-search?searchTerm=winter`
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
  
  To test the results, here are some suggested
  search terms:
  
    • `fifth` — 1 result
    • `a` — 18 results
    • `becky` — 4 results
    • `hello` — 0 results
*/

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(null);
  // idle | loading | success | error
  const [status, setStatus] = React.useState("idle");

  async function handleSearch(event) {
    event.preventDefault();

    setStatus("loading");

    // const url = `${ENDPOINT}?searchTerm=${searchTerm}&simulatedError=true`;
    const url = `${ENDPOINT}?searchTerm=${searchTerm}`;

    const response = await fetch(url);
    const json = await response.json();

    if (json.ok) {
      setSearchResults(json.results);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
          <TextInput
            required={true}
            label="Search"
            placeholder="The Fifth Season"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Go!</button>
        </form>
      </header>

      <main>
        {status === "idle" && <p>Welcome to book search!</p>}
        {status === "loading" && <p>Searching...</p>}
        {status === "error" && <p>Something went wrong!</p>}
        {status === "success" && (
          <SearchResultList searchResults={searchResults} />
        )}
      </main>
    </>
  );
}

function SearchResultList({ searchResults }) {
  if (searchResults.length === 0) {
    return <p>No results</p>;
  }
  return (
    <div className="search-results">
      <h2>Search Results:</h2>
      {searchResults?.map((result) => (
        <SearchResult key={result.isbn} result={result} />
      ))}
    </div>
  );
}

const EXAMPLE = {
  isbn: "9781473621442",
  name: "A Closed and Common Orbit",
  author: "Becky Chambers",
  coverSrc:
    "https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg",
  abstract:
    "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
};

export default App;
