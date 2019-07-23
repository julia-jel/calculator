import React from 'react';
import '../styles.css';

// operators:

const operators = [
  {
    symbol: "+",
    name: "add"
  },
  {
    symbol: "-",
    name: "subtract"
  }, 
  {
    symbol: "*",
    name: "multiply"
  }, 
  {
    symbol: "/",
    name: "divide"
  }
];

// renders operators pads with values and methods passed as props:

class OperatorPads extends React.Component {
  constructor(props) {
    super(props)
  };
  
  render() {
    return (
      operators.map ((operObj) => {
        return (
          <button value={operObj.symbol} id={operObj.name} className="buttons operator-buttons" onClick={this.props.handleClick}>{operObj.symbol}</button>
        )  
      })
    )
  }
}

export default OperatorPads;
