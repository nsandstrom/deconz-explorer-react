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
  return raw
}

const parseGroups = raw => {
  return raw
}

class LightList {
  constructor(lights) {
    this.lights = Object.entries(lights).map(([id, light]) => ({
      id,
      ...light
    }))
  }

  get all() {
    return this.lights
  }
}
const dictionaryToArray = dict =>
  Object.entries(dict).map(([id, entry]) => ({
    id,
    ...entry
  }))
