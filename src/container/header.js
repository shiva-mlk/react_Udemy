import React , {Component } from 'react';
import {Link} from 'react-router-dom'
import Component2 from '../Functional/Component2';

class Header extends Component{
    render(){
        return(
            <div>
                <Link to='home'>
                    Home
                </Link>
                <Link to ='/component1' style={{padding: '5px'}}>
                    Component1
                </Link>
                <Link to ='/component2' style={{padding: '10px'}}>
                    Component2
                </Link>
                <Link to='component3' style={{padding: '7px'}}>
                    Component3
                </Link>
            </div>
        )
    }

}
export default Header;