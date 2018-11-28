import { FETCH_ORDERS_REQUEST ,
         FETCH_ORDERS_RECEIVE ,
         FETCH_ORDERS_FAIL ,
         } from './types';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST
})

export const fetchOrdersReceive = orders => ({
  type: FETCH_ORDERS_RECEIVE,
  payload: orders
})

export const fetchOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload: error
})

export const fetchOrders = (orderId = '') => {
  return dispatch => {
    dispatch(fetchOrdersRequest())
    return fetch('http://localhost:5000/orders/'+orderId)
      .then(res => res.json())
      .then(orders => {
        dispatch(fetchOrdersReceive(orders))
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error))
      })
    }
  }



// export const fetchOrders = () => dispatch => {
//   dispatch(fetchOrdersRequest())
//   return fetch('http://localhost:5000/orders')
//     .then(res => res.json())
//     .then(orders => {
//       console.log(orders)
//       dispatch(fetchOrdersReceive(orders))
//     })
//     .catch(error => {
//       dispatch(fetchOrdersFail(error))
//     })
//   }
// export function fetchSingleOrder(orderId) {
//   return dispatch => {
//     return fetch('http://localhost:5000/orders/'+orderId)
//       .then(res => res.json())
//       .then(order => {
//         console.log(order)
//         dispatch(fetchSingleOrderReceive())
//       })
//       .catch(error => {
//         dispatch(fetchSingleOrderFail())
//       })
//   }
// }
// export const fetchSingleOrder = (orderId) => dispatch => {
//   dispatch(fetchSingleOrderRequest())
//   return fetch('http://localhost:5000/orders/'+orderId)
//     .then(res => res.json())
//     .then(order => dispatch(fetchSingleOrderReceive(order)))
//     .catch(error => dispatch(fetchSingleOrderFail(error)))
// }


// export const postRegister = (registerObj) => dispatch => {
//   console.log('Körs', registerObj)
//   return fetch('http://localhost:5000/users/signup', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(registerObj)
//   })
// }






// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchSingleOrder } from '../actions/fetchOrders';
// import NavBar from './Navbar';
//
// class SingleOrder extends Component {
//   constructor() {
//     super();
//     this.state = {
//       order: null
//     }
//   }
//
//   componentWillMount() {
//     console.log('WillMount')
//     // let display = (x) => {
//     //   return new Promise(resolve => {
//     //     setTimeout(() => {
//     //       resolve(x)
//     //     }, 5000)
//     //   })
//     // }
//     // async function test() {
//     //   let x = await display(10)
//     //   console.log(x)
//     // }
//     // test()
//     this.props.dispatch(fetchSingleOrder(this.props.match.params.orderId))
//       .then(payload => {
//         this.setState({
//           order: payload.payload
//         })
//       })
//   }
//   componentWillUnmount() {
//     console.log('WillUnMount')
//   }
//   render() {
//     let order = this.state.order;
//     if(!order) {
//       return null
//     }
//     let address = order.address.map((address, index) => {
//         return (
//           <ul className="address" key={index.toString()}>
//             <li>StreetAddress: {address.streetAddress}</li>
//             <li>ZipCode: {address.zipcode}</li>
//             <li>City: {address.city}</li>
//             <li>Country: {address.country}</li>
//           </ul>
//         )
//     })
//     let totalPriceArray = [];
//     let products = order.products.map((product, index) => {
//           let newPrice = product.price.replace('$', '');
//           let priceToNumber = Number(newPrice);
//           let totalPricePerProduct = priceToNumber * product.quantity;
//           totalPriceArray.push(totalPricePerProduct);
//           return (
//             <div className="single-order-products" key={index.toString()}>
//               <p className="col-4 single-order-products">{product.product_name}</p>
//               <p className="col-2 single-order-products">{product.price}</p>
//               <p className="col-3 single-order-products">{product.Category}</p>
//               <p className="col-1 single-order-products">{product.quantity}</p>
//               <p className="col-2 single-order-products">{totalPricePerProduct}</p>
//             </div>
//           )
//     })
//     const totalPrice = totalPriceArray.reduce((acc, current) => acc + current);
//
//
//
//
//     // let totalPriceArray = [];
//     // const order = this.props.order.map((order, index) => {
//     //   let address = order.address.map((address, index) => {
//     //     return (
//     //       <ul className="address" key={index.toString()}>
//     //         <li>StreetAddress: {address.streetAddress}</li>
//     //         <li>ZipCode: {address.zipcode}</li>
//     //         <li>City: {address.city}</li>
//     //         <li>Country: {address.country}</li>
//     //       </ul>
//     //     )
//     //   })
//     //   let products = order.products.map((product, index) => {
//     //         let newPrice = product.price.replace('$', '');
//     //         let priceToNumber = Number(newPrice);
//     //         let totalPricePerProduct = priceToNumber * product.quantity;
//     //         totalPriceArray.push(totalPricePerProduct);
//     //         return (
//     //           <div className="single-order-products" key={index.toString()}>
//     //             <p className="col-4 single-order-products">{product.product_name}</p>
//     //             <p className="col-2 single-order-products">{product.price}</p>
//     //             <p className="col-3 single-order-products">{product.Category}</p>
//     //             <p className="col-1 single-order-products">{product.quantity}</p>
//     //             <p className="col-2 single-order-products">${totalPricePerProduct}</p>
//     //           </div>
//     //         )
//     //   })
//     //   const totalPrice = totalPriceArray.reduce((acc, current) => acc + current);
//     //   return (
//     //     <div key={index.toString()}>
//     //       <div className="mb-5">
//     //         <h5>OrderId: {order._id}</h5>
//     //       </div>
//     //       <div className="single-order-main-div mb-5">
//     //         <div className="single-order-name-and-shipping-div mb-5">
//     //           <div>
//     //             <h5>Client</h5>
//     //             <p>Name: {order.fullName}</p>
//     //             <p>Email: {order.email}</p>
//     //             <p>PhoneNumber: 0{order.phonenumber}</p>
//     //           </div>
//     //           <div>
//     //             <h5>Shipping Address</h5>
//     //             {address}
//     //           </div>
//     //         </div>
//     //         <div>
//     //           <div className="single-order-products-title-div container">
//     //             <h5 className="col-4 single-order-products-title">Product Name</h5>
//     //             <h5 className="col-2 single-order-products-title">Price</h5>
//     //             <h5 className="col-3 single-order-products-title">Category</h5>
//     //             <h5 className="col-1 single-order-products-title">Quantity</h5>
//     //             <h5 className="col-2 single-order-products-title">TotalPrice</h5>
//     //           </div>
//     //           <div className="container">
//     //             {products}
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <div className="mt-5">
//     //         <p className="d-flex justify-content-end container">TotalPrice: ${totalPrice.toFixed(2)}</p>
//     //       </div>
//     //     </div>
//     //   )
//     // })
//      return (
//         <div>
//           <NavBar />
//             <div className="mb-5">
//               <h5>OrderId: {order._id}</h5>
//             </div>
//             <div className="single-order-main-div mb-5">
//               <div className="single-order-name-and-shipping-div mb-5">
//                 <div>
//                   <h5>Client</h5>
//                   <p>Name: {order.fullName}</p>
//                   <p>Email: {order.email}</p>
//                   <p>PhoneNumber: 0{order.phonenumber}</p>
//                 </div>
//                 <div>
//                   <h5>Shipping Address</h5>
//                   {address}
//                 </div>
//               </div>
//               <div>
//                 <div className="single-order-products-title-div container">
//                   <h5 className="col-4 single-order-products-title">Product Name</h5>
//                   <h5 className="col-2 single-order-products-title">Price</h5>
//                   <h5 className="col-3 single-order-products-title">Category</h5>
//                   <h5 className="col-1 single-order-products-title">Quantity</h5>
//                   <h5 className="col-2 single-order-products-title">TotalPrice</h5>
//                 </div>
//                 <div className="container">
//                   {products}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-5">
//               <p className="d-flex justify-content-end container">TotalPrice: ${totalPrice.toFixed(2)}</p>
//             </div>
//         </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => ({
//   order: state.singleOrder
// })
//
// export default connect(mapStateToProps)(SingleOrder);
//
//
//
//
// // <div className="mb-5">
// //   <h5>OrderId: {order._id}</h5>
// // </div>
// // <div className="single-order-main-div mb-5">
// //   <div className="single-order-name-and-shipping-div mb-5">
// //     <div>
// //       <h5>Client</h5>
// //       <p>Name: {order.fullName}</p>
// //       <p>Email: {order.email}</p>
// //       <p>PhoneNumber: 0{order.phonenumber}</p>
// //     </div>
// //     <div>
// //       <h5>Shipping Address</h5>
// //       {address}
// //     </div>
// //   </div>
// //   <div>
// //     <div className="single-order-products-title-div container">
// //       <h5 className="col-4 single-order-products-title">Product Name</h5>
// //       <h5 className="col-2 single-order-products-title">Price</h5>
// //       <h5 className="col-3 single-order-products-title">Category</h5>
// //       <h5 className="col-1 single-order-products-title">Quantity</h5>
// //       <h5 className="col-2 single-order-products-title">TotalPrice</h5>
// //     </div>
// //     <div className="container">
// //       {products}
// //     </div>
// //   </div>
// // </div>
// // <div className="mt-5">
// //   <p className="d-flex justify-content-end container">TotalPrice: ${totalPrice.toFixed(2)}</p>
// // </div>
