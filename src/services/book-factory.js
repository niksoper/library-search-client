import uuid from 'uuid/v4'

export default function bookFactory(title) {
  return {
    id: uuid(),
    title,
    gettingAvailability: false,
    library: null,
  }
}
