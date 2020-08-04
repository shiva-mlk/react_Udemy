import React, { Component } from "react";
import Component1 from "../Functional/Component1";
import * as ACTION_TYPEs from "../store/actions/action-types";
import * as ACTIONS from "../store/actions/actions";
import { connect } from "react-redux";
import Auth from '../utils/auth'
const auth=new Auth()

class Container1 extends Component {
  render() {
    const user_text = "text 1"
    
    
    return (
      <div>
        <button onClick={() =>auth.login()}>Login</button>
        <button onClick={() => console.log(this.props.stateprop1)}>
          Get Start
        </button>
        <button onClick={() => this.props.action1()}>Action 1</button>
        <button onClick={() => this.props.action2()}>Action 2</button>
        <button onClick={() => this.props.action_creator1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action_creator2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator3(user_text)}>user</button>
        {this.props.user_input
        ? <h1>{this.props.user_input}</h1>
        : null }
      </div>
    );
  }
}

function mapStateToprops(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_input: state.user_reducer.user_text
    
  };
}
function mapDispatchToprops(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: ()=> dispatch(ACTIONS.success()),
    action_creator2: ()=> dispatch(ACTIONS.failure()),
    action_creator3: (text)=> dispatch(ACTIONS.user_input(text))
  };
}

export default connect(mapStateToprops, mapDispatchToprops)(Container1);

