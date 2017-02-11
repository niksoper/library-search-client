import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers'
import App from './App'

const logger = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
)

/* eslint-disable no-undef */
const root = document.createElement('div')
document.body.appendChild(root)
/* eslint-enable no-undef */

/* eslint-disable react/jsx-filename-extension */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
)
/* eslint-enable react/jsx-filename-extension */
