import fetch from 'isomorphic-fetch'

export const getAvailability = bookId => ({
  type: 'START_GET_AVAILABILITY',
  payload: {
    bookId,
  },
})

export const receiveAvailability = (bookId, response) => ({
  type: 'RECEIVE_AVAILABILITY',
  payload: {
    bookId,
    response,
  },
})

export const addBook = dispatch => (title) => {
  dispatch({
    type: 'ADD_BOOK',
    payload: { title },
  })
}

export const fetchAvailability = dispatch => (id, title) => {
  dispatch(getAvailability(id))

  const endpointUrl = 'https://library-search-node-api.herokuapp.com/available-books'
  const encodedTitle = encodeURIComponent(title)
  const fullUrl = `${endpointUrl}?title=${encodedTitle}`

  return fetch(fullUrl)
    .then(response => response.json())
    .then(json => dispatch(receiveAvailability(id, json)))
}
