import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render() {
        return(
            <div className="services">
                <h3>services</h3>
                <h2>What we offer</h2>
                <div className="row">
                    <div>
                        <span><i class="fas fa-cat"></i></span>
                    </div>
                    <div>
                        <span><ion-icon name="phone-portrait"></ion-icon></span>
                    </div>
                    <div>
                        <span><ion-icon name="logo-github"></ion-icon></span>
                    </div>
                    <div>
                        <span><ion-icon name="logo-steam"></ion-icon></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;