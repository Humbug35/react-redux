

export const postRegister = (registerObj) => dispatch => {
  return fetch('http://localhost:5000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerObj)
  })
    .then(res => res.json())
    .then(user => console.log('User', user))
}
