import React from 'react';
import '../styles.css';

import Calculator from './Calculator';

// renders a calculator with a footer:

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Calculator />
        <div id="footer">
          <p>Designed and coded by <span className="highlighted-text">Julia EL</span></p>
        </div>
      </div>
    )
  }
}

export default Presentational;
