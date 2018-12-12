import React, { Component } from 'react';
import FormData from 'form-data';



class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      isValid: null
    }
  }
  getProductValues(e) {
    e.preventDefault();
    const format = ['jpeg', 'jpg', 'png'];
    if(this.refs.productimage.files[0]) {
      if(!this.refs.productname.value ||
         this.refs.productname.value === '' ||
         !this.refs.productprice.value ||
         this.refs.productprice.value === '' ||
         !this.refs.productcategory.value ||
         this.refs.productcategory.value === ''
    ) {
      console.log('False')
      this.setState({
        isValid: 'No field'
      })
    } else {
      console.log('True')
      for(let i = 0; i < format.length; i++) {
        if(this.refs.productimage.files[0].name.includes(format[i])) {
          console.log('TrueTure')
          let form = new FormData();
          form.append('product_name', this.refs.productname.value)
          form.append('price', this.refs.productprice.value)
          form.append('Category', this.refs.productcategory.value)
          form.append('productimage', this.refs.productimage.files[0])
          fetch('http://localhost:5000/products', {
            method: 'POST',
            config: { headers: { 'Content-type': 'multipart/form-data' } },
            body: form
          })
          .then(res => {
            console.log('Res', res)
            if(res.ok) {
              this.refs.form.reset()
              this.setState({
                isValid: 'Success'
              })
            }
            })
          }
        }
      }
    } else {
      console.log('Wrong file')
      this.setState({
        isValid: 'No file'
      })
    }
  }
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>Add a new product</h3>
        { this.state.isValid === 'No file' ? <div>You must choose a file</div> : null}
        { this.state.isValid === 'No field' ? <div>All field are required or your file has wrong format</div> : null}
        { this.state.isValid === 'Success' ? <div>Uploaded</div> : null}
        <form onSubmit={this.getProductValues.bind(this)} ref="form">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" name="productname" id="product-name" ref="productname" />
          <label htmlFor="product-price">Product Price</label>
          <input type="number" name="productprice" id="product-price" ref="productprice" />
          <label htmlFor="product-category">Product Category</label>
          <input type="text" name="productcategory" id="product-category" ref="productcategory" />
          <label htmlFor="product-image">Product Image</label>
          <input type="file" name="productimage" id="product-image" ref="productimage" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default AddProduct;
