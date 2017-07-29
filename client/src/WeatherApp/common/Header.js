import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <ul className="nav nav-tabs">
          <li role="presentation"><Link to="/">Home</Link></li>
          <li role="presentation"><Link to="/about">About</Link></li>
          <li role="presentation"><Link to="/deals">Deals</Link></li>
          <li role="presentation"><Link to="/contact">Contact</Link></li>
        </ul>
    );
  }
}

export default App;