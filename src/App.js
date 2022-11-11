import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Machine from './Components/Calculator';
import Home from './Components/Home';
import NavBar from './Components/nav';
import Quote from './Components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <>
        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/Calculator" element={<Machine />} />

          <Route path="/Quote" element={<Quote />} />

        </Routes>
      </>
    );
  }
}

export default App;
