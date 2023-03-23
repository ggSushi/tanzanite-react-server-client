import { useState, UseEffect } from 'react';
import axios from 'axios';

// Props are passed into our function component as an argument
//* Destructuring; shorthand way to pull prop attributes for components
// function Header({textColor, headerText, someOtherThing}) {
function Header(props) {
    const [firstName, setFirstName] = useState('Glonel');

    return (
        <header>
            <h1 style={{color: props.textColor}}> Yo! </h1>
            <p>Wassup, World! My Name's {firstName}! {props.headerTextProp} </p>
        </header>
    )
}

export default Header;