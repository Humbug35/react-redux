import { POST_REGISTER_BEGIN, POST_REGISTER_SUCCESS, POST_REGISTER_FAIL } from './types';

export const postRegisterBegin = () => ({
  type: POST_REGISTER_BEGIN
})
export const postRegisterSuccess = user => ({
  type: POST_REGISTER_SUCCESS,
  user
})
export const postRegisterFail = error => ({
  type: POST_REGISTER_FAIL,
  payload: error
})

export const postRegister = (registerObj) => dispatch => {
  dispatch(postRegisterBegin())
  return fetch('http://localhost:5000/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerObj)
  })
    .then(res => res.json())
    .then(user => {
      dispatch(postRegisterSuccess(user))
    })
    .catch(error => {
      dispatch(postRegisterFail(error))
    })
}
