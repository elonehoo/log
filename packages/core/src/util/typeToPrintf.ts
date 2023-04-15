function typeToPrintf(item: any) {
  switch (typeof item) {
    case 'string':
      return '%s'
    case 'boolean':
      return '%o'
    case 'number':
      return (0 ^ item) === item ? '%i' : '%f'
    default:
      return '%O'
  }
}

export default typeToPrintf
