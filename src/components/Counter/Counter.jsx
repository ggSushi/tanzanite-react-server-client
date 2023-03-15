import { useState, useEffect } from 'react';
import axios from 'axios';

function ClickCounter() {
    // Variables will go here
    const [counter, setCounter] = useState(0);

    //Functions for both buttons
    let increaseCount = () => {
        setCounter(counter + 1);
        console.log(`In increaseCount`);
    }
    let decreaseCount = () => {
        setCounter(counter - 1);
        console.log(`In decreaseCount`)
    }

    return (
        <div>
            <p>You clicked this {counter} times!</p>
            <button onClick={increaseCount} >Raise the roof!</button>
            <button onClick={decreaseCount} >Drop it like it's hot!</button>
        </div>
    )
}

export default ClickCounter;