import React from 'react';
import '../styles.css';

// renders a clear button with a value and a method passed as props:

class Clear extends React.Component {
  constructor(props) {
    super(props)
  };
  
  render() {
    return (
      <button value="clear" id="clear" className="buttons" onClick={this.props.handleClick}>AC</button>
    )
  }
};

export default Clear;
