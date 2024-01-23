import React, { Component } from 'react';
import { Users } from './Users';

export class Content1 extends Component {
  constructor(props) {
    super(props);
    this.print = this.print.bind(this);
    this.print('Content1: constructor');
   // console.log('Content1: constructor');
  }
  state = {
    showText1: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    this.print('Content1: shouldComponentUpdate');
   // console.log('Content1: shouldComponentUpdate');
    // return true or false based on your conditions
    return true;
  }
  componentDidMount() {
    this.print('Content1: componentDidMount');
   // console.log('Content1: componentDidMount');
    // perform actions after component mounts
  }

  componentDidUpdate(prevProps, prevState) {
    this.print('Content1: componentDidUpdate');
   // console.log('Content1: componentDidUpdate');
    // perform actions after component updates
  }

  componentWillUnmount() {
    this.print('Content1: componentWillUnmount');
   // console.log('Content1: componentWillUnmount');
    // perform cleanup before component is unmounted
  }
  print = (text) => {
    const outputElement = document.getElementById('outputContent1');
    if (outputElement) {
      outputElement.innerHTML += `<p>${text}</p>`;
    }
  };
  handleToggleImage = (imageNumber) => {
    this.setState((prevState) => ({
      [`showText${imageNumber}`]: !prevState[`showText${imageNumber}`],
    }));
  };
  render() {
    const { showText1 } = this.state;
    this.print('Content1: render');
   // console.log('Content1: render');
    return (
      <div>
        <h2>Content1 </h2>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
            <button onClick={() => this.handleToggleImage(1)}>Users</button>
            {showText1 && <Users />}
          <div id="outputContent1"></div>
      </div>
    );
  }
};

