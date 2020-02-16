export const parseData = data => {
  const lights = parseLights(data.lights)
  const sensors = parseSensors(data.sensors)
  const groups = parseGroups(data.groups)

  return { lights, sensors, groups }
}

const parseLights = raw => {
  return raw
}

const parseSensors = raw => {
  return raw
}

const parseGroups = raw => {
  return raw
}
