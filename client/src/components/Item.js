import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="Items">
        {this.props.items.map(item => (
          <li className="Item" key={item.id}>{item.name} {item.price}</li>
        ))}
      </div>
    );
  }
}

export default Item;
