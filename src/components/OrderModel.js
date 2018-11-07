import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class OrderModel extends Component {
  render() {
    const order = this.props.order;
    let quantity = 0;
    order.products.map(product => {
      return quantity = quantity + product.quantity
    })
    return (
          <div className="mb-4 order-model" key={order._id}>
            <table>
                <tbody>
                  <tr className="table-row-order container mt-1">
                    <td className="col-sm allorders"><NavLink to={"/orders/"+order._id}>{order._id}</NavLink></td>
                    <td className="col-sm allorders">{order.fullName}</td>
                    <td className="col-sm allorders">{quantity}</td>
                  </tr>
                </tbody>
            </table>
          </div>
    )
  }
}
export default OrderModel;
