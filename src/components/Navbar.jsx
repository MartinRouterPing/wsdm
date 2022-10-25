import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {
  state = {
    openTab: "Servers"
  }
  render() {
    return (
      <>
        <button>Servers</button>
        <button>Websites</button>
        <button>Domains</button>
      </>
    );
  }
}

export default Navbar;