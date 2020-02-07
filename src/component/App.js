import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import { Container, Segment } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <Container>
      <Segment>       
        <h1>My Counter App</h1>
        <Counter/>
      </Segment>
     </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    loop: state.loop
  };
}

export default connect(mapStateToProps)(App);