import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

const Counter = ({ count, onIncrementClick, onDecrementClick }) => (
  <div>
    <div>{count}</div>
    <button onClick={onIncrementClick}>Increment</button>
    <button onClick={onDecrementClick}>Decrement</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => {
    dispatch(increment())
  },
  onDecrementClick: () => {
    dispatch(decrement())
  },
})

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
