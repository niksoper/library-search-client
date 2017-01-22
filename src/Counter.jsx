import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Counter = ({ count }) => (
  <div>{count}</div>
)

const mapStateToProps = state => ({
  count: state.count,
})

Counter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(Counter)
