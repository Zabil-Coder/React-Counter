import { useState } from 'react';
import { data } from './db';
import './App.css';
import Counters from './components/Counters';
import AddCounter from './components/AddCounter';

function App() {
  const [counters, setCounters] = useState(data);

  return (
    <div className="App">
      <AddCounter counters={counters} setCounters={setCounters} />
      <Counters counters={counters} setCounters={setCounters} />
    </div>
  );
}

export default App;