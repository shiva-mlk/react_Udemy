import React, {Component} from 'react';
import Component1 from './Functional/Component1';
import Component2 from './Functional/Component2';
import Component3 from './Functional/Component3';
import Container1 from './container/Container1';
import Header from './container/header';
import history from './utils/history';

import { Router , Route} from 'react-router';

class Routes extends Component{
    render(){
    return(
        <div>
            <Router history={history}>
                <div>
                <Header/>
                <switch>
                    <Route path="/home"  component={Container1}/>
                    <Route path= "/component1" component={Component1}/>
                    <Route path= "/component2" component={Component2}/>   
                    <Route path= "/component3" component={Component3}/>   
                </switch>
                </div>
            </Router>
        </div>
    )
    }
}
export default Routes