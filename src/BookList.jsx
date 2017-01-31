import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Book from './Book'

const BookList = ({ books }) => (
  <ul>{
    books.map((book, i) => {
      const availability =
        book.gettingAvailability ? 'Getting Availability' :
        book.library === null ? '' : `${book.library.length} available`

      return (
        <li key={`book-${i + 1}`}>
          <Book title={book.title} />
          <div>{availability}</div>
        </li>
      )
    })
  }</ul>
)

const mapStateToProps = state => ({
  books: state.books,
})

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    gettingAvailability: PropTypes.bool.isRequired,
    library: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      availability: PropTypes.arrayOf(PropTypes.shape({
        library: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })).isRequired,
    })),
  })).isRequired,
}

export default connect(mapStateToProps)(BookList)
