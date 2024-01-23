import React, { Component } from 'react';

import style from '../css/Nav.module.css'; 

export class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuItems: [
          { id: 1, label: 'Home', link: '/' },
          { id: 2, label: 'About', link: '/about' },
          { id: 3, label: 'Services', link: '/services' },
          { id: 4, label: 'Contact', link: '/contact' },
        ],
        activeMenuItem: null,
      };
      //console.log('Navbar: constructor');
      this.print('Navbar: constructor');
    };
    shouldComponentUpdate(nextProps, nextState) {
      //console.log('Navbar: shouldComponentUpdate');
      // return true or false based on your conditions
      this.print('Navbar: shouldComponentUpdate');
      return true;
    };
    componentDidUpdate(prevProps, prevState) {
      //console.log('Navbar: componentDidUpdate');
      // perform actions after component updates
      this.print('Navbar: componentDidUpdate');
    };
  
    componentDidMount() {
     //console.log('Navbar: componentDidMount');
      // perform actions after component mounts
      this.print('Navbar: componentDidMount');
    };
  
    componentWillUnmount() {
      //console.log('Navbar: componentWillUnmount');
      // perform cleanup before component is unmounted
      this.print('Navbar: componentWillUnmount');
    };
    handleMenuItemClick = (itemId) => {
        this.setState({ activeMenuItem: itemId });
      };
      
    print = (text) => {
      const outputElement = document.getElementById('outputNavbar');
      if (outputElement) {
        outputElement.innerHTML += `<p>${text}</p>`;
      }
    };
    printText = (text) => {
      this.print(text);
    };
    
    render() {
      //console.log('Navbar: render');
      this.print('Navbar: render');
      return (
        <div>
          <h2>Navbar</h2>
          <menu>
            {this.state.menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                this.handleMenuItemClick(item.id);
                this.addLog(`MenuItem Clicked: ${item.label}`);
              }}
              className={`${style.menuItem} ${item.id === this.state.activeMenuItem ? style.active : ''}`}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
  
          </menu>
          <div id="outputNavbar"></div>
        </div>
      );
    }
  };
 