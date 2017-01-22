import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Counter'

const reducer = (state, action) => {
  console.log('ACTION', action) // eslint-disable-line no-console
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, { count: state.count + 1 })
  }

  return state
}

const initialState = { count: 1 }

const store = createStore(reducer, initialState)


/* eslint-disable no-undef, react/jsx-filename-extension */
render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('main'),
)
/* eslint-enable no-undef, react/jsx-filename-extension */
