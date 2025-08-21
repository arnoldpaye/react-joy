import React from 'react';
import VisuallyHidden from './components/VisuallyHidden';


function App() {
  const [showSearchField, setShowSearchField] = React.useState(false);

  /* let searchId;
  if (showSearchField) {
    searchId = React.useId();
  } */

  function handleToggleSearch(event) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  return (
    <>
      <form>
        {showSearchField && <SearchInput />}
        <button
          className="search-toggle-button"
          onClick={handleToggleSearch}
        >
          <VisuallyHidden>
            Toggle search
          </VisuallyHidden>
        </button>
      </form>
    </>
  )
}

function SearchInput() {
  const searchId = React.useId();

  return (
    <div className="search-field-wrapper">
      <label htmlFor={searchId}>
        <VisuallyHidden>
          Search
        </VisuallyHidden>
      </label>
      <input id={searchId} className="search-field" />
    </div>
  );
}

export default App;