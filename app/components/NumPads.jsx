import React from 'react';
import '../styles.css';

// numerals:

const nums = [
  {
    number: 1,
    name: "one",
    keyCode: 49
  },
  {
    number: 2,
    name: "two",
    keyCode: 50
  },
  {
    number: 3,
    name: "three",
    keyCode: 51
  },
  {
    number: 4,
    name: "four",
    keyCode: 52
  },
  {
    number: 5,
    name: "five",
    keyCode: 53
  },
  {
    number: 6,
    name: "six",
    keyCode: 54
  },
  {
    number: 7,
    name: "seven",
    keyCode: 55
  },
  {
    number: 8,
    name: "eight",
    keyCode: 56
  },
  {
    number: 9,
    name: "nine",
    keyCode: 57
  },
  {
    number: 0,
    name: "zero",
    keyCode: 48
  }
];

// renders numeral pads with values and methods passed as props:

class NumPads extends React.Component {  
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      nums.map ((numObj) => {
        return (
          <button value={numObj.number.toString()} id={numObj.name} className="buttons num-buttons" keyCode={numObj.keyCode} onClick={this.props.handleClick}>
            {numObj.number}
          </button>
        )    
      })
    )    
  };
};

export default NumPads;
