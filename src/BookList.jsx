import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Book from './Book'

const BookList = ({ books }) => (
  <ul>{
    books.map((book, i) => (
      <li key={`book-${i + 1}`}>
        <Book title={book.title} />
      </li>
    ))
  }</ul>
)

const mapStateToProps = state => ({
  books: state.books,
})

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default connect(mapStateToProps)(BookList)
