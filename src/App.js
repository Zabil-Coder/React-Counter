import { useState } from 'react';
import { data } from './db';
import './App.css';
import Counters from './components/Counters';

function App() {
  const [counters, setCounters] = useState(data);

  return (
    <div className="App">
      <Counters counters={counters} setCounters={setCounters} />
    </div>
  );
}

export default App;