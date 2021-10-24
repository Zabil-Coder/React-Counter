import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter display={counter} setDisplay={setCounter} />
    </div>
  );
}

export default App;
