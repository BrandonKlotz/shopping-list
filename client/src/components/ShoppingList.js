import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import Item from './Item.js';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: '',
      price: ''
    };
  }

  render() {

    const addedItems = this.props.items.map((items) => (
            <Item />
        ));

    return (
      <div className="Form">
        <h3>Shopping List</h3>
        <div className="Content">
          {addedItems}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add List Item"
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
          />
          <input
            placeholder="Item Price"
            onChange={this.handlePriceChange}
            value={this.state.price}
            type="number"
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      price: ''

    }));
  }
}


function mapStateToProps(state) {
    return {
        items: state.items
    }
}

const mapActionsToProps = { addItem }

export default connect(mapStateToProps, mapActionsToProps)(ShoppingList);
