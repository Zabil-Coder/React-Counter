import Button from "./Button";

function Counter({id, value, updateCounter}) {
    return ( 
        <div>
            <Button id={id} value="-" updateCounter={updateCounter}/>
            <span className="Display">{value}</span>
            <Button id={id} value="+" updateCounter={updateCounter}/>  
        </div> 
    );
}

export default Counter;