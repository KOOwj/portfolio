import React from 'react';
import { Link } from 'react-scroll'


import './css/Navigation.css';

function Navigation(){
    return(
        <div className="Navigation">
            <ul>
                <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</Link></li>
                <li><Link activeClass="active" to="works" spy={true} smooth={true} duration={500} >Works</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
            </ul>

        </div>
    )
}

export default Navigation;