function AddCounter({counters, setCounters}) {
    const addNewCounter = (e) => {
        e.preventDefault();
        let counter = {
            "id": counters.length+1,
            "name": e.target.counterName.value,
            "value": parseInt(e.target.counterValue.value)
        }
        setCounters([counter, ...counters]);
    };
    return ( 
    <form onSubmit={addNewCounter}>
        <input name="counterName" placeholder="Enter name" type="text" />
        <input name="counterValue" placeholder="Enter counter value" type="number" />
        <button>Add Counter</button>
    </form>
     );
}

export default AddCounter;