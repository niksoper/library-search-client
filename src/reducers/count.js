export default (count = 0, action) => {
  console.log('COUNT', count) // eslint-disable-line no-console
  console.log('ACTION', action) // eslint-disable-line no-console

  return action.type === 'INCREMENT' ? count + 1 : count
}
