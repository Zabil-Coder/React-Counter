import '../static/styles/Button.css';

function Button({value, counter, setDisplay}) {
    const displayChanger = (e) => {
        let value = counter;
        if(e.target.value === '+'){
            value++;
        } else if(counter > 0) {
            value--;
        }
        setDisplay(value);
    }
    let color = "green";
    let icon = "fa-plus";
    if(value === '-'){
        color = "red";
        icon = "fa-minus";
    }
    return ( 
        <button className={`Button ${color}`} onClick={displayChanger} value={value}>
            <i className={`fas ${icon}`}></i>
        </button> 
        );
}

export default Button;