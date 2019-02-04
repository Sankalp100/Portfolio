import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return(
            <nav>
               <h2 className="logo">React Projects</h2>

               <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Protfolio</a></li>
                <li><a href="#">Contect</a></li>    
               </ul> 
            </nav>
        );
    }
}

export default Navigation