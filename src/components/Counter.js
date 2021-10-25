import Button from "./Button";
import Display from "./Display";

function Counter({display, setDisplay}) {
    return (
        <div className="Counter">
            <h1 className="Title">Test</h1>
            <div>
            <Button value="-" counter={display} setDisplay={setDisplay} />
            <Display counter={display} />
            <Button value="+" counter={display} setDisplay={setDisplay} />  
            </div>
        </div>
    );
}

export default Counter;