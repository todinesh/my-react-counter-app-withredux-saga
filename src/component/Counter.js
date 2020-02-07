import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset, loop_on, loop_off, toggle_loop, increment_async } from '../actions/actionCreator'
import { bindActionCreators} from 'redux'
import { Button } from 'semantic-ui-react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    this.props.toggle_loop();
  };
  render() {
    return ( 
      <React.Fragment>
          <Button primary onClick = {this.props.increment}>+</Button>
          <Button onClick = {this.props.decrement}>-</Button>
          <Button onClick = {this.props.reset}>Reset</Button>
          <Button onClick = {this.props.loop_on}>Loop</Button>
          <Button onClick = {this.props.loop_off}>No Loop</Button>
          <Button onClick = {this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</Button>
          <Button onClick = {this.props.increment_async}> +Increment after 1 second(Using Saga) </Button>        
          <h1>Current Count: {this.props.count}</h1 > 
          <h1> Loop: { JSON.stringify(this.props.loop)} </h1> 
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({increment, decrement, reset, loop_on, loop_off, toggle_loop, increment_async}, dispatch)
}

function mapStateToProps(state) {
  return {
    count: state.count,
    loop: state.loop
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);