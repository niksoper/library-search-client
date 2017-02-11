import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchAvailability } from './actions'
import { bookProp } from './prop-types'

class Book extends Component {
  componentDidMount() {
    const { id, title } = this.props.book
    this.props.updateAvailability(id, title)
  }

  render() {
    const { book } = this.props
    const availability =
      book.gettingAvailability ? 'Getting Availability' :
      book.library === null ? '' : `${book.library.length} available`

    return (
      <div>
        <span>{book.title}</span>
        <div>{availability}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: bookProp.isRequired,
  updateAvailability: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateAvailability: fetchAvailability(dispatch),
})

export default connect(null, mapDispatchToProps)(Book)
