import CounterDetails from './CounterDetails';

function Counters({counters, setCounters}) {
    const updateCounter = (id ,action) => {
        setCounters(counters.map(counter => {
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
        <div className='Counters'>
            {counters.map(
                counter => <CounterDetails key={counter.id} counter={counter} setCounter={setCounters} updateCounter={updateCounter} /> 
            )}
        </div>
    );
}

export default Counters;