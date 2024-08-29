import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import NameInput from './components/NameInput';

const User = ({ name }) => {
  return <h2>My Name is {name}</h2>;
};

function App() {
  const [nama, setNama] = useState('');

  return (
    <div className="App">
      <h1 className="title">React Component</h1>
      <NameInput setName={setNama} />
      {nama && <User name={nama} />}
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
