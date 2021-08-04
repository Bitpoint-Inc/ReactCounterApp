import React, { useState } from 'react';
import style from '../static/css/HomePage.module.css'



function HomePage() {

    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter+1);
    }
    return (
        <div className={style.container}> 
        <div className = {style.counter}>{ counter }</div>
        <button className = {style.counterButton} onClick = {increment}>Increment</button>
        </div>
    )
}

export default HomePage;