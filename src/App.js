// @flow
import React, { Component } from 'react';
import glamorous from 'glamorous';

type Props = {};

class App extends Component<Props> {
  render() {
    return <Container>Welcome to React</Container>;
  }
}

const Container = glamorous.div({});

export default App;
