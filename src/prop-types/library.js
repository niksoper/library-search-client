import { PropTypes } from 'react'

import availability from './availability'

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(availability).isRequired,
})
