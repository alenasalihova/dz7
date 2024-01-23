import React, { Component } from 'react';

import { Navbar, Content1, Content2, Footer } from './';


class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showContent1: true,
      showContent2: true,
    };
   // console.log('Wrapper: constructor');
    this.print('Wrapper: constructor');
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.print('Wrapper: shouldComponentUpdate');
    //console.log('Wrapper: shouldComponentUpdate');
    // return true or false based on your conditions
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    this.print('Wrapper: componentDidUpdate');
    //console.log('Wrapper: componentDidUpdate');
    // perform actions after component updates
  }

  componentDidMount() {
    this.print('Wrapper: componentDidMount');
   // console.log('Wrapper: componentDidMount');
    // perform actions after component mounts
  }

  componentWillUnmount() {
    this.print('Wrapper: componentWillUnmount');
   // console.log('Wrapper: componentWillUnmount');
    // perform cleanup before component is unmounted
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      showNavbar: !prevState.showNavbar,
    }));
  };

  toggleContent1 = () => {
    this.setState((prevState) => ({
      showContent1: !prevState.showContent1,
    }));
  };

  toggleContent2 = () => {
    this.setState((prevState) => ({
      showContent2: !prevState.showContent2,
    }));
  };

  print = (text) => {
    const outputElement = document.getElementById('output');
    if (outputElement) {
      outputElement.innerHTML += `<p>${text}</p>`;
    }
  };

  printText = (text) => {
    this.print(text);
  };

  render() {
    //console.log('Wrapper: render');
    this.print('Wrapper: render');
    return (
      <div>
        <button onClick={this.toggleNavbar}>Navbar</button>
        <button onClick={this.toggleContent1}>Content1</button>
        <button onClick={this.toggleContent2}>Content2</button>
        {this.state.showNavbar && <Navbar />}
        {this.state.showContent1 && <Content1 />}
        {this.state.showContent2 && <Content2 />}
        {< Footer/>}
        <div id="output"></div>
      </div>
    );
  }
};

export default Wrapper;
