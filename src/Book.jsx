import React, { PropTypes } from 'react'

const Book = ({ title }) => (
  <span>{title}</span>
)

Book.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Book
