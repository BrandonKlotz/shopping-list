import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions';
import ShoppingList from './ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div>
        <ShoppingList onSubmit={this.props.addItem} onDelete={this.props.removeItem} />
      </div>
    );
  }

}


function mapStateToProps(state) {
    return {
        items: state.items
    }
}

const mapActionsToProps = {
    addItem, removeItem
}


export default connect(mapStateToProps, mapActionsToProps)(App);
