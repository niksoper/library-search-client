import bookFactory from '../services/book-factory'

const updateBook = books => id => update => (
  books.map(book => (book.id === id ? update(book) : book))
)

export default (books = [], action) => {
  switch (action.type) {

    case 'START_GET_AVAILABILITY':
      return updateBook(books)(action.payload.bookId)(book => (
        Object.assign({}, book, {
          gettingAvailability: true,
        },
      )))

    case 'RECEIVE_AVAILABILITY':
      return updateBook(books)(action.payload.bookId)(book => (
        Object.assign({}, book, {
          gettingAvailability: false,
          library: action.payload.response,
        },
      )))

    case 'ADD_BOOK':
      return [
        bookFactory(action.payload.title),
        ...books,
      ]

    default:
      return books
  }
}
