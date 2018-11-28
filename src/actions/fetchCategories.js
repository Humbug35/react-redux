import { FETCH_CATEGORIES_FOR_NAVIGATION } from './types';


export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES_FOR_NAVIGATION,
  categories
})

export const fetchCategory = () => dispatch => {
  return fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(categories => {
      let categoryArray = categories.map(cat => cat.Category)
      let singleCategory = categoryArray.filter((cat, index, array) => {
        return array.indexOf(cat) === index
      })
      dispatch(fetchCategories(singleCategory))
    })
    .catch((error) => console.log(error))
}
