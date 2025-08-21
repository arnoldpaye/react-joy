import React from 'react';

import LoginForm from './components/LoginForm';


const data = [
  { id: 'ali-axkqzt', name: 'Alice Johnson', job: 'Software Engineer', email: 'alice.johnson@example.com' },
  { id: 'bob-udjvpm', name: 'Bob Smith', job: 'Product Manager', email: 'bob.smith@example.com' },
  { id: 'cha-oyqjrb', name: 'Charlie Lee', job: 'UX Designer', email: 'charlie.lee@example.com' },
  { id: 'dia-wnzvle', name: 'Diana King', job: 'QA Analyst', email: 'diana.king@example.com' },
  { id: 'eth-psqkma', name: 'Ethan Brown', job: 'DevOps Engineer', email: 'ethan.brown@example.com' },
  { id: 'fio-rcxwte', name: 'Fiona White', job: 'Data Scientist', email: 'fiona.white@example.com' },
  { id: 'geo-mlqvns', name: 'George Black', job: 'Frontend Developer', email: 'george.black@example.com' },
  { id: 'han-ytzjkp', name: 'Hannah Green', job: 'Backend Developer', email: 'hannah.green@example.com' },
  { id: 'ian-evbqsd', name: 'Ian Blue', job: 'Scrum Master', email: 'ian.blue@example.com' },
  { id: 'jul-kwxgtr', name: 'Julia Red', job: 'Business Analyst', email: 'julia.red@example.com' }
];

function App() {

  return (
    <>
      <header>
        <LoginForm />
      </header>
      <main>
        <h1>Some Website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
      </main>
      <footer>
        <LoginForm />
      </footer>
    </>
  )
}

export default App;