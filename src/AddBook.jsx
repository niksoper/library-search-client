import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { addBook } from './actions'

import './AddBook.scss'

class BookSearch extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addBook(this.state.value)
    this.clear()
  }

  clear() {
    this.input.value = ''
    this.setState({ value: null })
  }

  render() {
    return (
      <form className="book-search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a title"
          onChange={this.handleChange}
          ref={(elem) => { this.input = elem }}
        />
      </form>
    )
  }
}

BookSearch.propTypes = {
  addBook: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  addBook: addBook(dispatch),
})

export default connect(null, mapDispatchToProps)(BookSearch)
