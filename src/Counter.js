/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Counter extends Component { 

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
    <div>
      <button onClick={this.props.onIncrementAsync}>
      Increment after 1 second
      </button>
      {' '}
      <button onClick={this.props.onIncrement}>
        Increment
          </button>
      {' '}
      <button onClick={this.props.onDecrement}>
        Decrement
          </button>
      <hr />
      <div>
        Clicked: {this.props.value} times
          </div>
      </div>
    );
  }

}



export default Counter;
