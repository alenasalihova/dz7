import React, { Component } from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log('Footer: State changed');
      document.title = `Вы нажали ${this.state.count} раз`;
    }
  }

  render() {
    return (
      <div>
        <h2>Footer</h2>
        <p>Вы нажали {this.state.count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}
