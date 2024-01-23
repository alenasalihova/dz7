import React, { Component } from 'react';

export class Content2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
   // console.log('Content2: Component Did Mount');
    this.print('Content2: Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
   // console.log('Content2: Count changed');
    this.print('Content2: Count changed');
  }

  componentWillUnmount() {
   // console.log('Content2: Component Will Unmount');
    this.print('Content2: Component Will Unmount');
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  print = (text) => {
    const outputElement = document.getElementById('outputContent2');
    if (outputElement) {
      outputElement.innerHTML += `<p>${text}</p>`;
    }
  };

  render() {
   // console.log('Content2: Render');
    this.print('Content2: Render');
    
    const { count } = this.state;

    return (
      <div>
        <h2>Content2</h2>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
        <div id="outputContent2"></div>
      </div>
    );
  }
}



