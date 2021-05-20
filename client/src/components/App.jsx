import React from 'react';

import Instagram from './Instagram.jsx';
import About from './About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        App
        <About />
        <Instagram />
      </div>
    );
  }
}

export default App;
