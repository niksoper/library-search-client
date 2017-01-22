import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Counter = ({ count, onIncrementClick }) => (
  <div>
    <div>{count}</div>
    <button onClick={onIncrementClick}>Increment</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => {
    dispatch({ type: 'INCREMENT' })
  },
})

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
