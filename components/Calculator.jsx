import React from 'react';
import '../styles.css';

// Importing components:

import Clear from './Clear';
import NumPads from './NumPads';
import Decimal from './Decimal';
import OperatorPads from './OperatorPads';
import Equals from './Equals';

// A parent component defining methods for all the pads:

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      output: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  };
  
  handleNumbers(event) {
    if (this.state.input.length > 19) {
      this.setState ({
        input: "Digit limit met",
        output: this.state.output
      })
    } else {
      if (this.state.input === "0" || /\=/.test(this.state.output) || /limit/.test(this.state.input)) {
        this.setState({
          input: event.target.value,
          output: event.target.value
        })
      }  else if (/\+|\-|\*|\//.test(this.state.input)) {
        this.setState({
          input: event.target.value,
          output: this.state.output.concat(event.target.value)
        })
      } else {
        this.setState({
          input: this.state.input.concat(event.target.value),
          output: this.state.output.concat(event.target.value)
        })
      }
    }
  };
  
  handleOperators(event) {
    if (/(\+|\-|\*|\/|\.)$/.test(this.state.output)) {
      this.setState({
        input: event.target.value,
        output: this.state.output.replace(/(\+|\-|\*|\/|\.)$/, event.target.value)
      }) 
    } else if (/\=/.test(this.state.output)) {
      this.setState({
        output: this.state.input.concat(event.target.value),
        input: event.target.value
      })
    } else {
      this.setState({
        input: event.target.value,
        output: this.state.output.concat(event.target.value)
      })
    }
  };
  
  handleDecimal() {
    if (! /\=/.test(this.state.output)) {
      if (/(\+|\-|\*|\/)$/.test(this.state.input)) {
        this.setState({
          input: "0.",
          output: this.state.output.concat("0.")
        })
      } else if ( ! /\./.test(this.state.input)) {
        this.setState({
          input: this.state.input.concat("."),
          output: this.state.output.concat(".")
        })
      }
    }  
  }
  
  handleEquals() {
    if (/\+|\-|\*|\//.test(this.state.output)) {
      let result = eval(this.state.output);
      this.setState({
        input: result.toString(),
        output: this.state.output.concat("=")
      })
    }
  }
  
  handleClear() {
    this.setState({
      input: "0",
      output: "0"
    })
  }
  
  render() {
    return (
     <div id="calculator">
        <div id="formula" className="screens">
          {this.state.output}
        </div>
        
        <div id="display" className="screens">         
          {this.state.input} 
        </div>
        
        <div id="pads">
          <Clear handleClick={this.handleClear} />
          <NumPads handleClick={this.handleNumbers} />
          <Decimal handleClick={this.handleDecimal} />
          <OperatorPads handleClick={this.handleOperators} />
          <Equals handleClick={this.handleEquals} />
        </div>
     </div>
    )
  }  
}

export default Calculator;
