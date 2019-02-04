import React, { Component } from 'react';
import Background from './img/reactproject.jpg';

const myStyles = {
    'backgroundImage':`url( ${Background} )`,
    'height': '80vh',
    backgrounSize: 'cover '     
}

class Header extends Component{
    
    render(){
        return(
            <header style={myStyles}>

            </header>
        );
    }
};

export default Header