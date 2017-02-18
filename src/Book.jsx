import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchAvailability } from './actions'
import { bookProp } from './prop-types'

import './Book.scss'

function mapAvailability(bookAvailability) {
  if (bookAvailability.length === 0) {
    return (
      <div className="availability">
        Unavailable in favourite libraries
      </div>
    )
  }

  return (
    <div>
      <div className="availability">
        In favourite libraries:
      </div>
      <ul>
        {bookAvailability.map(availability => (
          <li key={availability.url}>
            <a href={availability.url} target="_blank" rel="noopener noreferrer">
              {`${availability.availability.length} available`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

class Book extends Component {
  componentDidMount() {
    const { id, title } = this.props.children
    this.props.updateAvailability(id, title)
  }

  render() {
    const book = this.props.children
    const availability =
      book.gettingAvailability ? 'Getting Availability' :
      book.error ? book.error :
      book.library === null ? '' : mapAvailability(book.library)

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
