import React from 'react';
import '../styles.css';

// renders a decimal button with a value and a method passed as props:

class Decimal extends React.Component {
  constructor(props) {
    super(props)
  };
  
  render () {
    return (
      <button value="." id="decimal" className="buttons num-buttons" onClick={this.props.handleClick}>.</button>
    )
  }
}

export default Decimal;
