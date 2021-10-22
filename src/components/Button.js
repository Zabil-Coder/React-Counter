import '../static/styles/Button.css';

function Button({title, counter, setDisplay}) {
    const displayChanger = (e) => {
        let value = counter;
        if(e.target.value === '-' && counter > 0){
            value--;
        } else {
            value++;
        }
        setDisplay(value);
    }

    return ( 
        <button className='btn' onClick={displayChanger} value={title}>
            {title}
        </button> 
        );
}

export default Button;