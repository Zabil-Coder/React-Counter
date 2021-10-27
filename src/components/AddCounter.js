function AddCounter({counters, setCounters}) {
    const newCounter = () => {
        let counter = {
            "id": counters.length+1,
            "name": "Dunkrik",
            "value": 2
        }
        setCounters([counter, ...counters]);
    };
    return ( <button onClick={newCounter}>Add Counter</button> );
}

export default AddCounter;