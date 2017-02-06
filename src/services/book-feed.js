import uuid from 'uuid/v4'

export default titles => (
  titles.map(title => ({
    id: uuid(),
    title,
    gettingAvailability: false,
    library: null,
  }))
)
