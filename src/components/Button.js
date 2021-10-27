import '../static/styles/Button.css';

function Button({id, value, updateCounter}) {
    let color = "green";
    let icon = "fa-plus";
    if(value === '-'){
        color = "red";
        icon = "fa-minus";
    }
    
    return ( 
        <button className={`Button ${color}`} onClick={()=>updateCounter(id, value)} value={value}>
            <i className={`fas ${icon}`}></i>
        </button> 
        );
}

export default Button;