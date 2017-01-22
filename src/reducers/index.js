import { combineReducers } from 'redux'

import count from './count'
import books from '../books'

export default combineReducers({
  count,
  books: (state = books) => state,
})
