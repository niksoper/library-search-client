import { PropTypes } from 'react'

import library from './library'

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  gettingAvailability: PropTypes.bool.isRequired,
  library: PropTypes.arrayOf(library),
})
