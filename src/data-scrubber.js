export const parseData = data => {
  const lights = parseLights(data.lights)
  const sensors = parseSensors(data.sensors)
  const groups = parseGroups(data.groups)

  return { lights, sensors, groups }
}

const parseLights = raw => {
  return dictionaryToArray(raw)
}

const parseSensors = raw => {
  return dictionaryToArray(raw)
}

const parseGroups = raw => {
  return dictionaryToArray(raw)
}

const dictionaryToArray = dict =>
  Object.entries(dict).map(([id, entry]) => ({
    id,
    ...entry
  }))
