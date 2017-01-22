import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './App'

const store = createStore(reducers)

/* eslint-disable no-undef, react/jsx-filename-extension */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
)
/* eslint-enable no-undef, react/jsx-filename-extension */
