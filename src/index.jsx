import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

function FriendlyGreeting({ name }) {
  return (
    <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'sienna' }}>
      Greetings, {name}!
    </p>
  );
}

const root = createRoot(document.querySelector('#root'));

// root.render(<FriendlyGreeting name={'Arnold'} />);
const element = React.createElement(FriendlyGreeting, { name: 'Arnex' });
root.render(element);