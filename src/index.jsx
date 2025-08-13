import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

/* function FriendlyGreeting({ name }) {
  return (
    <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'sienna' }}>
      Greetings, {name}!
    </p>
  );
} */

function FriendlyGreeting({ name }) {
  return React.createElement(
    'p',
    null,
    `Greetings: ${name}`
  );
}

FriendlyGreeting({name: 'Arnold'});

const target = document.querySelector('#root');
const root = createRoot(target);

const element = React.createElement(FriendlyGreeting, { name: 'Arnex' });

const paragraph = document.createElement('p');
paragraph.textContent = 'This is a dynamically created paragraph.';

// target.appendChild(paragraph);
root.render(element)