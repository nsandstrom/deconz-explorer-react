export const printValue = value => {
  if (typeof value == 'boolean') {
    return value ? 'true' : 'false'
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value == 'object') {
    return Object.entries(value)
      .map(entry => entry.join(': '))
      .join(', ')
  }

  return value.toString()
}
