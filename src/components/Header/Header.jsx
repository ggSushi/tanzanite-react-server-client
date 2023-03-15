import { useState, UseEffect } from 'react';
import axios from 'axios';

function Header() {
    const [firstName, setFirstName] = useState('Glonel');

    return (
        <div>
            <p>Wassup, World! My Name's {firstName}!</p>
        </div>
    )
}

export default Header;