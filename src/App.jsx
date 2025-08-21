import React from 'react';
import { Motion, spring } from 'react-motion';

import ContactCard from './components/ContactCard';
import Button from './components/Button';


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
    <Button />
  )
}

export default App;