import 'whatwg-fetch'

export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const delayIncrement = () => (dispatch) => {
  return window.fetch('https://library-search-node-api.herokuapp.com/available-books?title=emma')
    .then((response) => console.log(response))
    .then(() => dispatch(increment()))
    .catch(() => dispatch(decrement()))
}
