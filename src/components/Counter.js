import Button from "./Button";
import '../static/styles/Counter.css'

function Counter({counter, updateCounter}) {
    return (
        <div className="Counter">
            <h4 className="Title">{counter.name}</h4>
            <div>
            <Button id={counter.id} value="-" updateCounter={updateCounter}/>
            <span className="Display">{counter.value}</span>
            <Button id={counter.id} value="+" updateCounter={updateCounter}/>  
            </div>
        </div>
    );
}

export default Counter;