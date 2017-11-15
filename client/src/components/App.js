import React, { Component } from 'react';
import ShoppingList from './ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="Items">
        <ShoppingList />
      </div>
    );
  }
}


export default App;
