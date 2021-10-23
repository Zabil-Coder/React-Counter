import '../static/styles/Button.css';

function Button({title, counter, setDisplay}) {
    const displayChanger = (e) => {
        let value = counter;
        if(e.target.value === '+'){
            value++;
        } else if(counter > 0) {
            value--;
        }
        setDisplay(value);
    }

    return ( 
        <button className='Button' onClick={displayChanger} value={title}>
            {title}
        </button> 
        );
}

export default Button;