import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchAvailability } from './actions'

import Book from './Book'
import bookProp from './book-prop-type'

const BookList = ({ books, updateAvailability }) => (
  <ul>{
    books.map((book, i) => {
      const availability =
        book.gettingAvailability ? 'Getting Availability' :
        book.library === null ? '' : `${book.library.length} available`

      const { id, title } = book

      return (
        <li key={`book-${i + 1}`}>
          <Book title={book.title} />
          <div>{availability}</div>
          <button onClick={() => updateAvailability(id, title)}>
            Update availability
          </button>
        </li>
      )
    })
  }</ul>
)

const mapStateToProps = state => ({
  books: state.books,
})

BookList.propTypes = {
  updateAvailability: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(bookProp).isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateAvailability: fetchAvailability(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
