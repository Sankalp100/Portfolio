import React, { Component } from 'react';
import Background from './img/reactproject.jpg';
import './Header.css'

const myStyles = {
    backgroundImage :`url( ${Background} )`,
    height : '45vh',
    backgrounSize : 'cover '     
}

class Header extends Component{
    
    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.Title}</h1>
                <p>Indian Institute of Infrmation Technology, Vadodara</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }
};

export default Header