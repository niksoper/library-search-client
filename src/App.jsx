import React from 'react'

import Masthead from './Masthead'
import BookList from './BookList'

import './App.scss'

export default () => (
  <div className="app">
    <Masthead>Biblio-check</Masthead>
    <BookList />
  </div>
)
