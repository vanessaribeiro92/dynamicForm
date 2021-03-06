import React, { Component } from 'react'

import api from '../../services/api'

export default class CreateForm extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products')

    console.log(response.data.docs)

    this.setState({ products: response.data.docs })
  };

  render() {

    return(
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
      // <h1>teste {this.state.products.length}</h1>
    )
  }
}