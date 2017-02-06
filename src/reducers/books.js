import initialBooks from '../services/fixed-book-list'

export default (state = initialBooks, action) => {
  switch (action.type) {

    case 'START_GET_AVAILABILITY':
      return state.map((book) => {
        if (book.id !== action.payload.bookId) return book
        return Object.assign({}, book, {
          gettingAvailability: true,
        })
      })

    case 'RECEIVE_AVAILABILITY':
      return state.map((book) => {
        if (book.id !== action.payload.bookId) return book
        return Object.assign({}, book, {
          gettingAvailability: false,
          library: action.payload.response,
        })
      })


    default:
      return state
  }
}
