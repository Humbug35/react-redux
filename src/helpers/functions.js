export const filterArray = (array) => {
  let newUrl = [];
  if(array.length > 1) {
    array.map((url, i) => {
      if(i === 0) {
        return newUrl.push(url.replace('&', '?'))
      } else {
        return newUrl.push(url.replace('?', '&'))
      }
    })
  } else {
    array.map((path, i) => {
      if(i === 0) {
        return newUrl.push(path.replace('&', '?'))
      } else {
        return newUrl.push(path.replace('?', '&'))
      }
    })
  }
  return newUrl.join('')
}

export const addToCart = (product, count) => {
    let cart = JSON.parse(localStorage.getItem('cartProducts')) || [];
    cart.push(product)
    localStorage.setItem('cartProducts', JSON.stringify(cart))
    console.log(product)
    console.log(count)
    console.log(cart)
}
