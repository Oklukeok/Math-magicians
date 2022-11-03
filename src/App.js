import React from 'react';
import Machine from './Components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return <Machine />;
  }
}

export default App;
