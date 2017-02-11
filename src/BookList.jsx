import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Book from './Book'
import { bookProp } from './prop-types'

import './BookList.scss'

const BookList = ({ books }) => (
  <div className="bookList">
    <ul>
      {
        books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))
      }
    </ul>
  </div>
)

const mapStateToProps = state => ({
  books: state.books,
})

BookList.propTypes = {
  books: PropTypes.arrayOf(bookProp).isRequired,
}

export default connect(mapStateToProps)(BookList)
