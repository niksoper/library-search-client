import React, { PropTypes } from 'react'

import AddBook from './AddBook'

import './Masthead.scss'

const Masthead = ({ children }) => (
  <div className="masthead">
    <h1>{children}</h1>
    <AddBook />
  </div>
)

Masthead.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Masthead
