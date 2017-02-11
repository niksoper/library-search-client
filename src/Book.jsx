import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchAvailability } from './actions'
import { bookProp } from './prop-types'

import './Book.scss'

class Book extends Component {
  componentDidMount() {
    const { id, title } = this.props.children
    this.props.updateAvailability(id, title)
  }

  render() {
    const book = this.props.children
    const availability =
      book.gettingAvailability ? 'Getting Availability' :
      book.library === null ? '' : `${book.library.length} available`

    return (
      <section className="book">
        <h1>{book.title}</h1>
        <div className="availability">{availability}</div>
      </section>
    )
  }
}

Book.propTypes = {
  children: bookProp.isRequired,
  updateAvailability: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateAvailability: fetchAvailability(dispatch),
})

export default connect(null, mapDispatchToProps)(Book)
