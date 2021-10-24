import Button from "./Button";
import Display from "./Display";

function Counter({display, setDisplay}) {
    return (
        <div className='Counter'>
            <Button title="+" counter={display} setDisplay={setDisplay} />
            <Display counter={display} />
            <Button title="-" counter={display} setDisplay={setDisplay} />  
        </div>
    );
}

export default Counter;