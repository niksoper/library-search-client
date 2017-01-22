export default (count = 0, action) => {
  console.log('COUNT', count) // eslint-disable-line no-console
  console.log('ACTION', action) // eslint-disable-line no-console

  switch (action.type) {
    case 'INCREMENT':
      return count + 1
    case 'DECREMENT':
      return count - 1
    default:
      return count
  }
}
