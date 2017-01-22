import React from 'react'

import BookList from './BookList'
import books from './books'

export default () => (
  <div>
    <h1>Biblio-check</h1>
    <BookList books={books} />
  </div>
)
