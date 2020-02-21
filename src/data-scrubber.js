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
  const groups = dictionaryToArray(raw)
  return cleanupGroups(groups)
}

const dictionaryToArray = dict =>
  Object.entries(dict).map(([id, entry]) => ({
    id,
    ...entry
  }))

const cleanupGroups = groups => groups.map(cleanupGroup)

const cleanupGroup = group => {
  if(group.devicemembership.length > 0) group.type="DeviceGroup"
  return group
}
