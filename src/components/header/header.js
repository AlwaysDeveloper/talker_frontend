import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

class Header extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row header-main">
                <div className="col-lg-4 col-xl-4 logo"></div>
                <div className="col-lg-8 col-xl-8 menu">
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;