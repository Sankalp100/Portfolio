import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return(
            <nav>
               <h2 className="logo">React Projects</h2>

               <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Protfolio</li>
                <li>Contect</li>    
               </ul> 
            </nav>
        );
    }
}

export default Navigation