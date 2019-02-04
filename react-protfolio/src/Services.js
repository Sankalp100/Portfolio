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
                        <h4>Responsive</h4>
                        <p>Look great on any screen size</p>
                    </div>
                    <div>
                        <span><ion-icon name="phone-portrait"></ion-icon></span>
                        <h4>Responsive</h4>
                        <p>Look great on any screen size</p>

                    </div>
                    <div>
                        <span><ion-icon name="logo-github"></ion-icon></span>
                        <h4>Open source</h4>
                        <p>Available on github</p>

                    </div>
                    <div>
                        <span><ion-icon name="logo-steam"></ion-icon></span>
                        <h4>Gaming</h4>
                        <p>invite me on steam</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Services;