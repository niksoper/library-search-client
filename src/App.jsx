import React from 'react'

import BookList from './BookList'

const books = [
  {
    title: 'Atonement',
  }, {
    title: 'Fury'
  }, {
    title: 'The Muse'
  }, {
    title: 'The Wasp Factory'
  }, {
    title: 'Fear and Loathing in Las Vegas'
  }, {
    title: 'Pride and Prejudice'
  },
]

export default () => (
  <div>
    <h1>Biblio-check</h1>
    <BookList books={books}/>
  </div>
)