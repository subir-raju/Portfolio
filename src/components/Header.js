import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className='logo'>
                    <h1>Subir Dey</h1>
                </div>

                <ul className='ul-items'>
                    <li>
                        <Link to ='#'>Home</Link>
                    </li>

                     <li>
                        <Link to ='#'>Abour</Link>
                    </li>
                    <li>
                        <Link to ='#'>Service</Link>
                    </li>
                    <li>
                        <Link to ='#'>Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Header;