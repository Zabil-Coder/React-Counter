import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { data } from './db';

function App() {
  const [counters, setCounters] = useState(data);

  const updateCounter = (id ,action) => {
      setCounters( counters.map(counter => {
        if (counter.id === id) {
          if(action === '+') {
            counter.value += 1;
          } else if(action === '-' && counter.value > 0) {
            counter.value -= 1;
          }
        }
        return counter; 
      }));
  }

  return (
    <div className="App">
      {
      counters.map(counter => 
        <Counter key={counter.id} counter={counter} setCounter={setCounters} updateCounter={updateCounter} />)
      }
    </div>
  );
}

export default App;