import bookFactory from '../services/book-factory'

const updateBook = books => id => update => (
  books.map(book => (book.id === id ? update(book) : book))
)

const addBook = books => title => ([
  bookFactory(title),
  ...books.filter(book => book.title.toLowerCase() !== title.toLowerCase()),
])

export default (books = [], action) => {
  switch (action.type) {

    case 'START_GET_AVAILABILITY':
      return updateBook(books)(action.payload.bookId)(book => ({
        ...book,
        gettingAvailability: true,
      }))

    case 'RECEIVE_AVAILABILITY':
      return updateBook(books)(action.payload.bookId)(book => ({
        ...book,
        gettingAvailability: false,
        library: action.payload.response,
      }))

    case 'AVAILABILITY_ERROR':
      return updateBook(books)(action.payload.bookId)(book => ({
        ...book,
        gettingAvailability: false,
        error: 'There was a problem getting availability',
      }))

    case 'ADD_BOOK':
      return addBook(books)(action.payload.title)

    default:
      return books
  }
}
