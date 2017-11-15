import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions';
import "font-awesome/css/font-awesome.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: '',
      price: '',
    };
  }

  render() {
    let CartTotal = 0;

    this.props.items.map((item, index) => {
      CartTotal += Number(item.price);
    });


    return (
      <div className="Form">
        <h3>Shopping List</h3>
        <div className="Content">

          <div className="Total"></div>

          {this.props.items.map(item => (
            <li className="Item" key={item.id}>
              <button className="Card__button ContactCard__button ContactCard__button--delete" onClick={this.props.removeItem}>
                    <i className="fa fa-trash fa-sm"></i>
              </button>
              <span className="ItemInfo">{item.name}</span>
              <span className="ItemInfo">$ {item.price}</span>
            </li>))}

            <div className="Total">
              <h4>Total: <span> ${CartTotal}</span></h4>
            </div>

        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add List Item"
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            required
          />
          <input
            placeholder="Item Price"
            onChange={this.handlePriceChange}
            value={this.state.price}
            type="number"
            required
          />
          <button className="Submit" type="submit">
            Add #{this.props.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleRemove = (props) => {
      removeItem(this.props.item.id);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      price: this.state.price
    });
    // Clear the form by simply updating the state with empty form values.
    this.setState({
      name: "",
      price: ""

    })
  }
}

function mapStateToProps(state) {
    return {
        items: state.items,
    }
}

const mapActionsToProps = { addItem, removeItem }

export default connect(mapStateToProps, mapActionsToProps)(ShoppingList);
