import React, { PropTypes } from 'react'

import './Masthead.scss'

const Masthead = ({ children }) => (
  <h1 className="masthead">{children}</h1>
)

Masthead.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Masthead
