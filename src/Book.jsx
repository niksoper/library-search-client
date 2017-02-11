import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchAvailability } from './actions'
import { bookProp } from './prop-types'

const Book = ({ book, updateAvailability }) => {
  const availability =
    book.gettingAvailability ? 'Getting Availability' :
    book.library === null ? '' : `${book.library.length} available`

  const { id, title } = book

  return (
    <div>
      <span>{title}</span>
      <div>{availability}</div>
      <button onClick={() => updateAvailability(id, title)}>
        Update availability
      </button>
    </div>
  )
}

Book.propTypes = {
  book: bookProp.isRequired,
  updateAvailability: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateAvailability: fetchAvailability(dispatch),
})

export default connect(null, mapDispatchToProps)(Book)
