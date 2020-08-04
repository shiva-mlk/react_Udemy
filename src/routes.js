import React, {Component} from 'react';
import Callback from './Functional/callback';
import Component1 from './Functional/Component1';
import Component2 from './Functional/Component2';
import Component3 from './Functional/Component3';
import Container1 from './container/Container1';
import Header from './container/header';
import history from './utils/history';
import { Router , Route ,Switch} from 'react-router';
import Auth from './utils/auth'
// const auth=new Auth()
// const handleAuthentication = (props) => {
//     if (props.location.hash){
//         auth.handleAuth(props)
//     }
// }
class Routes extends Component{
    render(){
    return(
        <div>
            <Router history={history}>
                <div>
                <Header/>
                <Switch>
                    <Route exact path='/'  component={Container1} />
                    <Route path='/callback'  component={Callback}/>
                    <Route path= "/component/:id" render={(props)=><Component1{...props}/>}/>
  
                </Switch>
                </div>
            </Router>
        </div>
    )
    }
}
export default Routes