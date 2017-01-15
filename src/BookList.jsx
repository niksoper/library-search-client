import React, { PropTypes } from 'react'

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

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default BookList
