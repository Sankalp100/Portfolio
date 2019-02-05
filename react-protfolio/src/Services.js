import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render() {
        return(
            <div className="services">
                <h3>services</h3>
                <h2>What we offer</h2>
                <div className="row">
                   <Icon myicon={iconObj[0].icon} mytitle={iconObj[0].title} mydescription={iconObj[0].description}/>
                   <Icon myicon={iconObj[1].icon} mytitle={iconObj[1].title} mydescription={iconObj[1].description}/>
                   <Icon myicon={iconObj[2].icon} mytitle={iconObj[2].title} mydescription={iconObj[2].description}/>
                   <Icon myicon={iconObj[3].icon} mytitle={iconObj[3].title} mydescription={iconObj[3].description}/>
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon:<i class="fas fa-cat"></i>,
        title:'Responsive',
        description: 'Look great on any screen size'
    },
    {
        icon:<ion-icon name="phone-portrait"></ion-icon> ,
        title:'Responsive',
        description: 'Available on github'
    },
    {
        icon:<ion-icon name="logo-github"></ion-icon>,
        title:'Open source',
        description: 'Available on github'
    },
    {
        icon:<ion-icon name="logo-steam"></ion-icon>,
        title:'Gaming',
        description: 'invite me on steam'
    }
];

class Icon extends Component{
    render() {
        return (
            <div>
                <span>
                    {this.props.myicon}
                </span>
                <h4>{this.props.mytitle}</h4>
                <p>{this.props.mydescription}</p>
            </div>
        );
    }
}

export default Services;