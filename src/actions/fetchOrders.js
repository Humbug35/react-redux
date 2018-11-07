import { FETCH_ORDERS ,
         FETCH_ORDERS_BEGIN ,
         FETCH_ORDERS_SUCCESS ,
         FETCH_ORDERS_FAILURE ,
         FETCH_SINGLE_ORDER } from './types';





export const fetchOrders = () => dispatch => {
  return fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(orders => dispatch({
      type: FETCH_ORDERS,
      payload: orders
    }))
}

export const fetchSingleOrder = (orderId) => dispatch => {
  return fetch('http://localhost:5000/orders/'+orderId)
    .then(res => res.json())
    .then(order => dispatch({
      type: FETCH_SINGLE_ORDER,
      payload: order
    }))
}


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
