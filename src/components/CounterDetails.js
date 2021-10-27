import Counter from './Counter';
import '../static/styles/CounterDetails.css'

function CounterDetails({counter, updateCounter}) {
    return (
        <div className="CounterDetails">
            <h4 className="Title">{counter.name}</h4>
            <Counter id={counter.id} value={counter.value} updateCounter={updateCounter} />
        </div>
    );
}

export default CounterDetails;