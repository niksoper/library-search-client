import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Book from './Book'
import { bookProp } from './prop-types'

const BookList = ({ books }) => (
  <ul>{
    books.map((book, i) => (
      <li key={`book-${i + 1}`}>
        <Book book={book} />
      </li>
    ))
  }</ul>
)

const mapStateToProps = state => ({
  books: state.books,
})

BookList.propTypes = {
  books: PropTypes.arrayOf(bookProp).isRequired,
}

export default connect(mapStateToProps)(BookList)
