import { PropTypes } from 'react'

const availabilityProp = PropTypes.shape({
  library: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
})

const libraryProp = PropTypes.shape({
  url: PropTypes.string.isRequired,
  availability: PropTypes.arrayOf(availabilityProp).isRequired,
})

const bookProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  gettingAvailability: PropTypes.bool.isRequired,
  library: PropTypes.arrayOf(libraryProp),
})

export default bookProp
