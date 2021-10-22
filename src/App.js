import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  const [display, setDisplay] = useState(0);  
  return (
    <div className="App">
      <Display counter={display} />
      <Button title="+" counter={display} setDisplay={setDisplay} />
      <Button title="-" counter={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
