import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { delayIncrement, decrement } from './actions'

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

const mapDispatchToProps = {
  onIncrementClick: delayIncrement,
  onDecrementClick: decrement,
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
