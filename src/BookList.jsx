import React from 'react'

import Book from './Book'

export default ({ books }) => (
  <ul>{
    books.map((book, i) => (
      <li key={`book-${i}`}>
        <Book title={book.title} />
      </li>
    ))
  }</ul>
)
