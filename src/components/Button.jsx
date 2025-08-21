import React from 'react';

function Button ({children}) {
  const [hi, setHi] = React.useState(5);

  function handleClick(event) {
    console.log('Clicked');
    setHi(hi + 1);
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;